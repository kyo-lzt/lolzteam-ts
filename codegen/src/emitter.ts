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

function emitQueryParamsInterface(group: string, method: MethodDefinition): TypeEntry | undefined {
	if (method.params.queryParams.length === 0) return undefined;

	const typeName = `${buildTypeName(group, method.methodName)}Params`;
	const lines: string[] = [];
	lines.push(`export interface ${typeName} {`);

	for (const param of method.params.queryParams) {
		const opt = param.required ? "" : "?";
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

	const lines: string[] = [];
	lines.push(`export interface ${typeName} {`);

	for (const prop of method.bodyProperties) {
		const opt = prop.required ? "" : "?";
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

	// Component schemas
	if (Object.keys(componentSchemas).length > 0) {
		sections.push("// ─── Component Schemas ────────────────────────────────────────\n");
		for (const [name, schema] of Object.entries(componentSchemas)) {
			const iface = generateInterface(name, schema as Parameters<typeof generateInterface>[1]);
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

	lines.push(`\tasync ${method.methodName}(${argStr}): Promise<${responseName}> {`);
	lines.push("\t\treturn this.http.request({");
	lines.push(`\t\t\tmethod: "${method.httpMethod}",`);
	lines.push(`\t\t\tpath: ${pathExpr},`);

	if (hasQueryType) {
		lines.push("\t\t\tquery: params,");
	}

	if (hasBodyType) {
		lines.push("\t\t\tbody: body,");
	}

	if (method.isMultipart) {
		lines.push("\t\t\tmultipart: true,");
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
): string {
	const lines: string[] = [];

	lines.push("// Auto-generated. Do not edit manually.\n");
	lines.push('import type { ClientConfig } from "../../runtime/types.js";');
	lines.push('import { HttpClient } from "../../runtime/http-client.js";');

	// Collect all type imports from all groups
	const typeImports: string[] = [];
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
		}
	}

	if (typeImports.length > 0) {
		typeImports.sort();
		lines.push(`import type { ${typeImports.join(", ")} } from "./types.js";`);
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
