/**
 * Extract structured operation definitions from an OpenAPI spec.
 */

import { derefShallow } from "../utils/deref.js";
import { operationIdToGroup, operationIdToMethod } from "../utils/naming.js";
import { extractParameters } from "./parameters.js";
import { extractResponseType } from "./responses.js";
import { schemaToTypeString } from "./types.js";

interface OpenApiSpec {
	paths?: Record<string, Record<string, unknown>>;
	components?: Record<string, unknown>;
	[key: string]: unknown;
}

export interface OperationInfo {
	operationId: string;
	method: string; // HTTP method uppercase
	path: string;
	methodName: string; // camelCase method name
	pathParams: Array<{ name: string; type: string; required: boolean }>;
	queryParams: Array<{ name: string; type: string; required: boolean }>;
	bodyProperties: Array<{ name: string; type: string; required: boolean }>;
	responseType: string;
}

export interface GroupedOperations {
	groupName: string;
	operations: OperationInfo[];
}

// Also keep the old types for backward compat with parser.ts / emitter.ts
export interface BodyProperty {
	name: string;
	type: string;
	required: boolean;
}

export interface MethodDefinition {
	operationId: string;
	methodName: string;
	httpMethod: string;
	path: string;
	params: {
		pathParams: Array<{ name: string; type: string; required: boolean }>;
		queryParams: Array<{ name: string; type: string; required: boolean }>;
	};
	bodyProperties: BodyProperty[];
	hasBody: boolean;
	bodyRequired: boolean;
	bodyEncoding: "form" | "json" | "multipart";
	responseType: string;
	bodyIsArray?: boolean;
	bodyArrayItemType?: string;
}

const HTTP_METHODS = ["get", "post", "put", "delete", "patch"] as const;

interface OperationObject {
	operationId?: string;
	parameters?: unknown[];
	requestBody?: {
		required?: boolean;
		content?: Record<
			string,
			{
				schema?: {
					type?: string;
					properties?: Record<string, Record<string, unknown>>;
					required?: string[];
					oneOf?: Array<Record<string, unknown>>;
					[key: string]: unknown;
				};
			}
		>;
		$ref?: string;
	};
	responses?: Record<string, unknown>;
	[key: string]: unknown;
}

interface BodyExtractionResult {
	properties: Array<{ name: string; type: string; required: boolean }>;
	bodyEncoding: "form" | "json" | "multipart";
	bodyIsArray?: boolean;
	bodyArrayItemType?: string;
}

/**
 * Extract body properties from a request body, resolving $ref as needed.
 */
function extractBody(operation: OperationObject, spec: OpenApiSpec): BodyExtractionResult {
	const empty: BodyExtractionResult = { properties: [], bodyEncoding: "form" };

	if (!operation.requestBody) return empty;

	// Resolve $ref on requestBody itself
	const requestBody = derefShallow<NonNullable<OperationObject["requestBody"]>>(
		operation.requestBody,
		spec,
	);

	const content = requestBody.content;
	if (!content) return empty;

	// 3-way content-type detection (matches Rust logic)
	const hasForm = "application/x-www-form-urlencoded" in content;
	const hasJson = "application/json" in content;
	const hasMultipart = "multipart/form-data" in content;

	const bodyEncoding: "form" | "json" | "multipart" =
		hasMultipart && !hasForm ? "multipart" : hasJson && !hasForm ? "json" : "form";

	// Pick schema from best available content type
	const mediaType =
		content["application/x-www-form-urlencoded"] ??
		content["application/json"] ??
		content["multipart/form-data"];
	if (!mediaType?.schema) return { properties: [], bodyEncoding };

	const schema = mediaType.schema;
	const bodyProperties: Array<{ name: string; type: string; required: boolean }> = [];

	// Handle array body (e.g. POST /batch)
	if (schema.type === "array" && !schema.properties) {
		const items = schema.items as Record<string, unknown> | undefined;
		const itemType = items ? schemaToTypeString(items, spec) : "unknown";
		return { properties: [], bodyEncoding, bodyIsArray: true, bodyArrayItemType: itemType };
	}

	// Handle oneOf — merge all variant properties (PHP pattern)
	if (schema.oneOf) {
		const allProps: Record<string, Array<Record<string, unknown>>> = {};
		const variantRequiredSets: Array<Set<string>> = [];

		for (const variant of schema.oneOf) {
			const v = variant as {
				properties?: Record<string, Record<string, unknown>>;
				required?: string[];
			};
			const variantProps = v.properties ?? {};
			const requiredSet = new Set(v.required ?? []);
			variantRequiredSets.push(requiredSet);

			for (const [name, propSchema] of Object.entries(variantProps)) {
				const existing = allProps[name];
				if (existing) {
					existing.push(propSchema);
				} else {
					allProps[name] = [propSchema];
				}
			}
		}

		for (const [name, propSchemas] of Object.entries(allProps)) {
			// Required only if required in ALL variants (intersection)
			const isRequired = variantRequiredSets.every((s) => s.has(name));

			let mergedSchema: Record<string, unknown>;
			const [firstSchema] = propSchemas;
			if (propSchemas.length === 1 && firstSchema) {
				mergedSchema = firstSchema;
			} else {
				// Check if all schemas have enums — merge enum values
				const allEnums: unknown[] = [];
				let allAreEnums = true;
				for (const ps of propSchemas) {
					const e = ps.enum;
					if (Array.isArray(e)) {
						allEnums.push(...e);
					} else {
						allAreEnums = false;
						break;
					}
				}

				if (allAreEnums && allEnums.length > 0) {
					// Deduplicate enum values
					const unique = [...new Set(allEnums.map((v) => JSON.stringify(v)))].map(
						(s) => JSON.parse(s) as unknown,
					);
					mergedSchema = { enum: unique };
				} else {
					// Different types — deduplicate and wrap in oneOf if needed
					const uniqueMap = new Map<string, Record<string, unknown>>();
					for (const ps of propSchemas) {
						uniqueMap.set(JSON.stringify(ps), ps);
					}
					const uniqueSchemas = [...uniqueMap.values()];
					const [firstUnique] = uniqueSchemas;
					if (uniqueSchemas.length === 1 && firstUnique) {
						mergedSchema = firstUnique;
					} else {
						mergedSchema = { oneOf: uniqueSchemas };
					}
				}
			}

			bodyProperties.push({
				name,
				type: schemaToTypeString(mergedSchema, spec),
				required: isRequired,
			});
		}
	} else if (schema.properties) {
		const requiredSet = new Set(schema.required ?? []);
		for (const [name, propSchema] of Object.entries(schema.properties)) {
			// format: binary → Blob type for file uploads
			const format = (propSchema as { format?: string }).format;
			const type = format === "binary" ? "Blob" : schemaToTypeString(propSchema, spec);
			bodyProperties.push({
				name,
				type,
				required: requiredSet.has(name),
			});
		}
	}

	return { properties: bodyProperties, bodyEncoding };
}

/**
 * Iterate all paths/methods in the spec and extract OperationInfo for each,
 * grouped by the first segment of the operationId.
 */
export function extractOperations(spec: OpenApiSpec): GroupedOperations[] {
	const paths = spec.paths;
	if (!paths) return [];

	const groupMap = new Map<string, OperationInfo[]>();

	for (const [path, pathItem] of Object.entries(paths)) {
		for (const httpMethod of HTTP_METHODS) {
			const rawOperation = pathItem[httpMethod];
			if (!rawOperation || typeof rawOperation !== "object") continue;

			const operation = rawOperation as OperationObject;
			const operationId = operation.operationId;
			if (typeof operationId !== "string") continue;

			const groupName = operationIdToGroup(operationId);
			const methodName = operationIdToMethod(operationId);

			const params = extractParameters(operation, spec);
			const body = extractBody(operation, spec);
			const responseType = extractResponseType(operation, spec);

			const info: OperationInfo = {
				operationId,
				method: httpMethod.toUpperCase(),
				path,
				methodName,
				pathParams: params.pathParams,
				queryParams: params.queryParams,
				bodyProperties: body.properties,
				responseType,
			};

			const existing = groupMap.get(groupName);
			if (existing) {
				existing.push(info);
			} else {
				groupMap.set(groupName, [info]);
			}
		}
	}

	const groups: GroupedOperations[] = [];
	for (const [groupName, operations] of groupMap) {
		groups.push({ groupName, operations });
	}

	return groups;
}

/**
 * Backward-compatible function used by parser.ts.
 */
export function extractMethodDefinition(
	operationId: string,
	methodName: string,
	httpMethod: string,
	path: string,
	operation: OperationObject,
): MethodDefinition {
	// Use empty spec for backward compat (refs should already be resolved by parser)
	const spec: OpenApiSpec = {};
	const params = extractParameters(operation, spec);
	const body = extractBody(operation, spec);
	const responseType = extractResponseType(operation, spec);

	const isGet = httpMethod.toUpperCase() === "GET";

	// GET requests can't have body — treat body properties as query params
	const effectiveQueryParams = isGet
		? [...params.queryParams, ...body.properties.map((p) => ({ ...p, required: false }))]
		: params.queryParams;

	return {
		operationId,
		methodName,
		httpMethod: httpMethod.toUpperCase(),
		path,
		params: {
			pathParams: params.pathParams,
			queryParams: effectiveQueryParams,
		},
		bodyProperties: isGet ? [] : body.properties,
		hasBody: isGet ? false : Boolean(operation.requestBody),
		bodyRequired: isGet
			? false
			: Boolean(
					operation.requestBody &&
						derefShallow<{ required?: boolean }>(operation.requestBody, spec).required,
				),
		bodyEncoding: isGet ? "form" : body.bodyEncoding,
		responseType,
		bodyIsArray: isGet ? undefined : body.bodyIsArray,
		bodyArrayItemType: isGet ? undefined : body.bodyArrayItemType,
	};
}
