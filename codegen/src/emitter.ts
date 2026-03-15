/**
 * Emit TypeScript source files from parsed OpenAPI data.
 */

import type { ComponentSchemas, ParsedGroup } from "./parser.js";
import type { MethodDefinition } from "./transforms/operations.js";
import { generateInterface } from "./transforms/types.js";
import { buildTypeName, groupToClassName, groupToPropertyName } from "./utils/naming.js";

// ─── Type Emission ───────────────────────────────────────────────────────────

interface TypeEntry {
	name: string;
	code: string;
}

function formatDefaultJsdoc(defaultValue: unknown): string {
	return `/** @default ${JSON.stringify(defaultValue)} */`;
}

function emitQueryParamsInterface(group: string, method: MethodDefinition): TypeEntry | undefined {
	if (method.params.queryParams.length === 0) return undefined;

	const typeName = `${buildTypeName(group, method.methodName)}Params`;
	const lines: string[] = [];
	lines.push(`export interface ${typeName} {`);

	for (const param of method.params.queryParams) {
		const opt = param.required && param.defaultValue === undefined ? "" : "?";
		if (param.defaultValue !== undefined) {
			lines.push(`\t${formatDefaultJsdoc(param.defaultValue)}`);
		}
		lines.push(`\t${safePropName(param.name)}${opt}: ${param.type};`);
	}

	lines.push("}");
	return { name: typeName, code: lines.join("\n") };
}

function emitBodyInterface(group: string, method: MethodDefinition): TypeEntry | undefined {
	if (!method.hasBody) return undefined;

	const typeName = `${buildTypeName(group, method.methodName)}Body`;

	// Array body — emit a type alias instead of an interface
	if (method.bodyIsArray) {
		const itemType = method.bodyArrayItemType ?? "unknown";
		return {
			name: typeName,
			code: `export type ${typeName} = Array<${itemType}>;`,
		};
	}

	if (method.bodyProperties.length === 0) return undefined;

	// Discriminated union: emit variant interfaces + union type alias
	if (method.bodyVariants && method.bodyVariants.length > 0) {
		const baseTypeName = buildTypeName(group, method.methodName);
		const variantNames: string[] = [];
		const sections: string[] = [];

		for (const variant of method.bodyVariants) {
			const variantTypeName = `${baseTypeName}${variant.nameSuffix}`;
			variantNames.push(variantTypeName);

			const lines: string[] = [];
			lines.push(`export interface ${variantTypeName} {`);
			for (const prop of variant.properties) {
				const opt = prop.required && prop.defaultValue === undefined ? "" : "?";
				if (prop.defaultValue !== undefined) {
					lines.push(`\t${formatDefaultJsdoc(prop.defaultValue)}`);
				}
				lines.push(`\t${safePropName(prop.name)}${opt}: ${prop.type};`);
			}
			lines.push("}");
			sections.push(lines.join("\n"));
		}

		sections.push(`export type ${typeName} =\n\t| ${variantNames.join("\n\t| ")};`);

		return { name: typeName, code: sections.join("\n\n") };
	}

	const lines: string[] = [];
	lines.push(`export interface ${typeName} {`);

	for (const prop of method.bodyProperties) {
		const opt = prop.required && prop.defaultValue === undefined ? "" : "?";
		if (prop.defaultValue !== undefined) {
			lines.push(`\t${formatDefaultJsdoc(prop.defaultValue)}`);
		}
		lines.push(`\t${safePropName(prop.name)}${opt}: ${prop.type};`);
	}

	lines.push("}");
	return { name: typeName, code: lines.join("\n") };
}

function emitResponseType(group: string, method: MethodDefinition): TypeEntry {
	const typeName = `${buildTypeName(group, method.methodName)}Response`;
	return {
		name: typeName,
		code: `export type ${typeName} = ${method.responseType};`,
	};
}

export function emitTypesFile(groups: ParsedGroup[], componentSchemas: ComponentSchemas): string {
	const sections: string[] = [];

	sections.push("// Auto-generated. Do not edit manually.\n");

	// Check if any body property uses FileInput
	const usesFileInput = groups.some((g) =>
		g.methods.some((m) => {
			const allProps = [
				...m.bodyProperties,
				...(m.bodyVariants?.flatMap((v) => v.properties) ?? []),
			];
			return allProps.some((p) => p.type === "FileInput");
		}),
	);
	if (usesFileInput) {
		sections.push('import type { FileInput } from "../../runtime/types.js";\n');
	}

	// Component schemas
	if (Object.keys(componentSchemas).length > 0) {
		const spec = { components: { schemas: componentSchemas } };
		sections.push("// ─── Component Schemas ────────────────────────────────────────\n");
		for (const [name, schema] of Object.entries(componentSchemas)) {
			const iface = generateInterface(
				name,
				schema as Parameters<typeof generateInterface>[1],
				spec,
			);
			sections.push(iface);
			sections.push("");
		}
	}

	// Operation types per group
	for (const group of groups) {
		const groupTypes: string[] = [];

		for (const method of group.methods) {
			const queryType = emitQueryParamsInterface(group.groupName, method);
			if (queryType) {
				groupTypes.push(queryType.code);
			}

			const bodyType = emitBodyInterface(group.groupName, method);
			if (bodyType) {
				groupTypes.push(bodyType.code);
			}

			const responseType = emitResponseType(group.groupName, method);
			groupTypes.push(responseType.code);
		}

		if (groupTypes.length > 0) {
			const className = groupToClassName(group.groupName);
			sections.push(`// ─── ${className} Types ────────────────────────────────────────\n`);
			sections.push(groupTypes.join("\n\n"));
			sections.push("");
		}
	}

	return sections.join("\n");
}

// ─── Group Class Emission ────────────────────────────────────────────────────

function buildPathExpression(path: string): string {
	// Replace {param} with ${param} for template literal
	const hasParams = path.includes("{");
	if (!hasParams) {
		return `"${path}"`;
	}
	const template = path.replace(/\{([^}]+)\}/g, (_match, paramName: string) => {
		return `\${${paramName}}`;
	});
	return `\`${template}\``;
}

function formatDefaultLiteral(value: unknown): string {
	if (typeof value === "string") {
		return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
	}
	if (typeof value === "boolean") {
		return value ? "true" : "false";
	}
	return String(value);
}

function emitMethod(group: string, method: MethodDefinition): string {
	const lines: string[] = [];
	const responseName = `${buildTypeName(group, method.methodName)}Response`;

	// Build argument list
	const args: string[] = [];

	// Path params (positional)
	for (const param of method.params.pathParams) {
		args.push(`${param.name}: ${param.type}`);
	}

	// Body param
	const bodyTypeName = `${buildTypeName(group, method.methodName)}Body`;
	const hasBodyType = method.hasBody && (method.bodyProperties.length > 0 || method.bodyIsArray);
	if (hasBodyType) {
		const bodyOpt = method.bodyRequired ? "" : "?";
		args.push(`body${bodyOpt}: ${bodyTypeName}`);
	}

	// Query params
	const queryTypeName = `${buildTypeName(group, method.methodName)}Params`;
	const hasQueryType = method.params.queryParams.length > 0;
	if (hasQueryType) {
		args.push(`params?: ${queryTypeName}`);
	}

	const argStr = args.join(", ");
	const pathExpr = buildPathExpression(method.path);

	const isSearch = group.toLowerCase() === "category";

	// Collect defaults for query params and body properties
	const queryDefaults = method.params.queryParams.filter((p) => p.defaultValue !== undefined);
	const bodyDefaults =
		hasBodyType && !method.bodyIsArray
			? method.bodyProperties.filter((p) => p.defaultValue !== undefined)
			: [];

	// Collect spaceDelimited fields from body properties and variants
	const allBodyProps = [
		...method.bodyProperties,
		...(method.bodyVariants?.flatMap((v) => v.properties) ?? []),
	];
	const spaceDelimitedFields = [
		...new Set(allBodyProps.filter((p) => p.isSpaceDelimited).map((p) => p.name)),
	];

	// Determine effective variable names (with defaults applied)
	const queryExpr =
		queryDefaults.length > 0
			? `{ ${queryDefaults.map((p) => `${safePropName(p.name)}: ${formatDefaultLiteral(p.defaultValue)}`).join(", ")}, ...params }`
			: "params";
	const bodyExpr =
		bodyDefaults.length > 0
			? `{ ${bodyDefaults.map((p) => `${safePropName(p.name)}: ${formatDefaultLiteral(p.defaultValue)}`).join(", ")}, ...body }`
			: "body";

	lines.push(`\tasync ${method.methodName}(${argStr}): Promise<${responseName}> {`);

	// Emit enum validations for query params
	for (const param of method.params.queryParams) {
		if (param.enumValues && param.enumValues.length > 0) {
			const allowed = JSON.stringify(param.enumValues);
			const accessor = safeAccessor("params?", param.name);
			lines.push(`\t\tvalidateEnum("${param.name}", ${accessor}, ${allowed});`);
		}
	}

	// Emit enum validations for body properties (always access `body` directly)
	if (hasBodyType && !method.bodyIsArray) {
		for (const prop of method.bodyProperties) {
			if (prop.enumValues && prop.enumValues.length > 0) {
				const allowed = JSON.stringify(prop.enumValues);
				const accessor = safeAccessor("body", prop.name);
				const guard = `body && "${prop.name}" in body`;
				lines.push(`\t\tif (${guard}) validateEnum("${prop.name}", ${accessor}, ${allowed});`);
			}
		}
	}

	// Emit spaceDelimited field transformations
	const effectiveBodyExpr =
		hasBodyType && spaceDelimitedFields.length > 0
			? (() => {
					const spreads = spaceDelimitedFields.map(
						(f) =>
							`...("${f}" in ${bodyExpr} && Array.isArray(${bodyExpr}.${f}) ? { ${safePropName(f)}: ${bodyExpr}.${f}.join(" ") } : {})`,
					);
					return `{ ...${bodyExpr}, ${spreads.join(", ")} }`;
				})()
			: bodyExpr;

	lines.push("\t\treturn this.http.request({");
	lines.push(`\t\t\tmethod: "${method.httpMethod}",`);
	lines.push(`\t\t\tpath: ${pathExpr},`);

	if (hasQueryType) {
		lines.push(`\t\t\tquery: ${queryExpr},`);
	}

	if (hasBodyType) {
		lines.push(`\t\t\tbody: ${effectiveBodyExpr},`);
	}

	if (method.bodyEncoding !== "form") {
		lines.push(`\t\t\tbodyEncoding: "${method.bodyEncoding}",`);
	}

	if (isSearch) {
		lines.push("\t\t\tisSearch: true,");
	}

	lines.push("\t\t});");
	lines.push("\t}");

	return lines.join("\n");
}

// ─── Combined Index File Emission ────────────────────────────────────────────

export function emitCombinedIndexFile(
	groups: ParsedGroup[],
	clientName: string,
	defaultBaseUrl: string,
	defaultRateLimit: number,
	defaultSearchRateLimit?: number,
	componentSchemaNames?: Set<string>,
): string {
	const lines: string[] = [];

	lines.push("// Auto-generated. Do not edit manually.\n");
	lines.push('import type { ClientConfig } from "../../runtime/types.js";');
	lines.push('import { HttpClient } from "../../runtime/http-client.js";');
	lines.push('import { validateEnum } from "../../runtime/validation.js";');

	// Collect all type imports from all groups
	const typeImports: string[] = [];
	const knownSchemas = componentSchemaNames ?? new Set<string>();
	for (const group of groups) {
		for (const method of group.methods) {
			const base = buildTypeName(group.groupName, method.methodName);
			typeImports.push(`${base}Response`);

			if (method.params.queryParams.length > 0) {
				typeImports.push(`${base}Params`);
			}
			if (method.hasBody && (method.bodyProperties.length > 0 || method.bodyIsArray)) {
				typeImports.push(`${base}Body`);
			}

			// Collect component schema types referenced in path/query param types
			for (const param of [...method.params.pathParams, ...method.params.queryParams]) {
				for (const name of extractTypeReferences(param.type, knownSchemas)) {
					typeImports.push(name);
				}
			}
		}
	}

	const uniqueImports = [...new Set(typeImports)].sort();
	if (uniqueImports.length > 0) {
		lines.push(`import type { ${uniqueImports.join(", ")} } from "./types.js";`);
	}

	// Emit all group classes
	for (const group of groups) {
		lines.push("");
		lines.push(emitGroupClass(group));
	}

	// Emit client class
	lines.push("");
	lines.push(`export class ${clientName} {`);

	for (const group of groups) {
		const className = groupToClassName(group.groupName);
		const propName = groupToPropertyName(group.groupName);
		lines.push(`\treadonly ${propName}: ${className};`);
	}

	lines.push("");
	lines.push(`\tconstructor(config: Omit<ClientConfig, "baseUrl"> & { baseUrl?: string }) {`);
	lines.push("\t\tconst http = new HttpClient({");
	lines.push("\t\t\t...config,");
	lines.push(`\t\t\tbaseUrl: config.baseUrl ?? "${defaultBaseUrl}",`);
	lines.push(`\t\t\trateLimit: config.rateLimit ?? { requestsPerMinute: ${defaultRateLimit} },`);
	if (defaultSearchRateLimit !== undefined) {
		lines.push(
			`\t\t\tsearchRateLimit: config.searchRateLimit ?? { requestsPerMinute: ${defaultSearchRateLimit} },`,
		);
	}
	lines.push("\t\t});");

	for (const group of groups) {
		const className = groupToClassName(group.groupName);
		const propName = groupToPropertyName(group.groupName);
		lines.push(`\t\tthis.${propName} = new ${className}(http);`);
	}

	lines.push("\t}");
	lines.push("}");
	lines.push("");

	// Re-export types
	lines.push('export type * from "./types.js";');
	lines.push("");

	return lines.join("\n");
}

function emitGroupClass(group: ParsedGroup): string {
	const className = groupToClassName(group.groupName);
	const lines: string[] = [];

	lines.push(`class ${className} {`);
	lines.push("\tconstructor(private readonly http: HttpClient) {}");

	for (const method of group.methods) {
		lines.push("");
		lines.push(emitMethod(group.groupName, method));
	}

	lines.push("}");

	return lines.join("\n");
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function safePropName(name: string): string {
	if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
		return name;
	}
	return `"${name}"`;
}

/** Build a property accessor, using bracket notation for non-identifier names. */
function safeAccessor(obj: string, prop: string): string {
	if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(prop)) {
		return `${obj}.${prop}`;
	}
	// "params?" → "params?.["key"]"
	if (obj.endsWith("?")) {
		return `${obj}.["${prop}"]`;
	}
	return `${obj}["${prop}"]`;
}

/** Extract component schema type names referenced in a type expression. */
function extractTypeReferences(typeExpr: string, knownSchemas: Set<string>): string[] {
	const refs: string[] = [];
	// Match identifiers that could be component schema names
	const identifiers = typeExpr.match(/[A-Z][a-zA-Z0-9_]*/g);
	if (identifiers) {
		for (const id of identifiers) {
			if (knownSchemas.has(id) && !refs.includes(id)) {
				refs.push(id);
			}
		}
	}
	return refs;
}
