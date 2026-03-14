/**
 * Convert OpenAPI schema objects to TypeScript type strings.
 */

import { derefShallow } from "../utils/deref.js";

interface OpenApiSpec {
	components?: {
		schemas?: Record<string, SchemaObject>;
		[key: string]: unknown;
	};
	[key: string]: unknown;
}

interface SchemaObject {
	type?: string | string[];
	format?: string;
	enum?: unknown[];
	properties?: Record<string, SchemaObject>;
	required?: string[];
	items?: SchemaObject;
	oneOf?: SchemaObject[];
	anyOf?: SchemaObject[];
	allOf?: SchemaObject[];
	additionalProperties?: boolean | SchemaObject;
	title?: string;
	description?: string;
	nullable?: boolean;
	$ref?: string;
	[key: string]: unknown;
}

/** Convert a single OpenAPI type string to a TS type string. */
function primitiveType(t: string): string {
	switch (t) {
		case "string":
			return "string";
		case "integer":
		case "number":
			return "number";
		case "boolean":
			return "boolean";
		case "null":
			return "null";
		default:
			return "unknown";
	}
}

/** Convert an OpenAPI schema to a TypeScript type string. */
export function schemaToTypeString(
	schema: SchemaObject | undefined,
	spec: OpenApiSpec,
	indent = 0,
): string {
	if (!schema || Object.keys(schema).length === 0) {
		return "unknown";
	}

	// $ref → resolve and convert
	if (schema.$ref) {
		const resolved = derefShallow<SchemaObject>(schema, spec);
		return schemaToTypeString(resolved, spec, indent);
	}

	// enum → string literal union
	if (schema.enum && Array.isArray(schema.enum) && schema.enum.length > 0) {
		const literals = schema.enum
			.filter((v): v is string | number => typeof v === "string" || typeof v === "number")
			.map((v) =>
				typeof v === "string" ? `"${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : String(v),
			);
		if (literals.length > 0) {
			return literals.join(" | ");
		}
	}

	// oneOf / anyOf → union
	if (schema.oneOf && schema.oneOf.length > 0) {
		const types = schema.oneOf.map((s) => schemaToTypeString(s, spec, indent));
		return types.join(" | ");
	}
	if (schema.anyOf && schema.anyOf.length > 0) {
		const types = schema.anyOf.map((s) => schemaToTypeString(s, spec, indent));
		return types.join(" | ");
	}

	// allOf → intersection
	if (schema.allOf && schema.allOf.length > 0) {
		const types = schema.allOf.map((s) => schemaToTypeString(s, spec, indent));
		return types.join(" & ");
	}

	// Multi-type array: type: ['string', 'integer']
	if (Array.isArray(schema.type)) {
		const hasNull = schema.type.includes("null");
		const nonNullTypes = schema.type
			.filter((t): t is string => typeof t === "string" && t !== "null")
			.map(primitiveType);
		const result = nonNullTypes.join(" | ");
		return hasNull ? `${result} | null` : result;
	}

	const type = schema.type;

	if (type === "array") {
		const itemType = schemaToTypeString(schema.items, spec, indent);
		return `Array<${itemType}>`;
	}

	if (type === "object" || schema.properties) {
		return objectType(schema, spec, indent);
	}

	if (typeof type === "string") {
		return primitiveType(type);
	}

	return "unknown";
}

/** Backward-compatible alias used by existing code. */
export function schemaToType(schema: SchemaObject | undefined, indent = 0): string {
	// When called without spec, use an empty spec (no ref resolution)
	return schemaToTypeString(schema, {}, indent);
}

function objectType(schema: SchemaObject, spec: OpenApiSpec, indent: number): string {
	const props = schema.properties;
	if (!props || Object.keys(props).length === 0) {
		if (schema.additionalProperties) {
			const valType =
				typeof schema.additionalProperties === "object"
					? schemaToTypeString(schema.additionalProperties, spec, indent)
					: "unknown";
			return `Record<string, ${valType}>`;
		}
		return "Record<string, unknown>";
	}

	const requiredSet = new Set(schema.required ?? []);
	const pad = "\t".repeat(indent + 1);
	const closePad = "\t".repeat(indent);
	const lines: string[] = [];

	for (const [name, propSchema] of Object.entries(props)) {
		const optional = requiredSet.has(name) ? "" : "?";
		const propType = schemaToTypeString(propSchema, spec, indent + 1);
		lines.push(`${pad}${safePropName(name)}${optional}: ${propType};`);
	}

	return `{\n${lines.join("\n")}\n${closePad}}`;
}

function safePropName(name: string): string {
	if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
		return name;
	}
	return `"${name}"`;
}

/** Generate a named interface string. */
export function generateInterface(name: string, schema: SchemaObject, indent = 0): string {
	const pad = "\t".repeat(indent);
	const props = schema.properties;
	if (!props || Object.keys(props).length === 0) {
		const typeStr = schemaToType(schema, indent);
		return `${pad}export type ${name} = ${typeStr};`;
	}

	const requiredSet = new Set(schema.required ?? []);
	const propPad = "\t".repeat(indent + 1);
	const lines: string[] = [];

	for (const [propName, propSchema] of Object.entries(props)) {
		const optional = requiredSet.has(propName) ? "" : "?";
		const propType = schemaToType(propSchema, indent + 1);
		lines.push(`${propPad}${safePropName(propName)}${optional}: ${propType};`);
	}

	return `${pad}export interface ${name} {\n${lines.join("\n")}\n${pad}}`;
}

/**
 * Generate named type/interface declarations for all schemas in components.schemas.
 *
 * Special cases:
 * - Multi-type (e.g. `type: ['string', 'integer']`) → `export type X = string | number;`
 * - Scalar type with no properties → `export type X = number;`
 * - Enum → `export type X = "a" | "b";`
 * - Object → `export interface X { ... }`
 */
export function generateComponentTypes(spec: OpenApiSpec): string {
	const schemas = spec.components?.schemas;
	if (!schemas || Object.keys(schemas).length === 0) {
		return "";
	}

	const sections: string[] = [];

	for (const [name, schema] of Object.entries(schemas)) {
		if (!schema || typeof schema !== "object") continue;

		// Multi-type: type: ['string', 'integer']
		if (Array.isArray(schema.type)) {
			const typeStr = schemaToTypeString(schema, spec);
			sections.push(`export type ${name} = ${typeStr};`);
			continue;
		}

		// Enum on string
		if (schema.enum && Array.isArray(schema.enum) && schema.enum.length > 0) {
			const typeStr = schemaToTypeString(schema, spec);
			sections.push(`export type ${name} = ${typeStr};`);
			continue;
		}

		// Object with properties → interface
		if (schema.properties && Object.keys(schema.properties).length > 0) {
			sections.push(generateInterface(name, schema));
			continue;
		}

		// Scalar type with no properties → type alias
		if (schema.type && !schema.properties) {
			const typeStr = schemaToTypeString(schema, spec);
			sections.push(`export type ${name} = ${typeStr};`);
			continue;
		}

		// Fallback: use generateInterface which handles the empty-props case
		sections.push(generateInterface(name, schema));
	}

	return sections.join("\n\n");
}
