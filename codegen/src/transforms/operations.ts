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
	isMultipart: boolean;
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
	isMultipart: boolean;
	bodyIsArray?: boolean;
	bodyArrayItemType?: string;
}

/**
 * Extract body properties from a request body, resolving $ref as needed.
 */
function extractBody(operation: OperationObject, spec: OpenApiSpec): BodyExtractionResult {
	const empty: BodyExtractionResult = { properties: [], isMultipart: false };

	if (!operation.requestBody) return empty;

	// Resolve $ref on requestBody itself
	const requestBody = derefShallow<NonNullable<OperationObject["requestBody"]>>(
		operation.requestBody,
		spec,
	);

	const content = requestBody.content;
	if (!content) return empty;

	// Detect multipart
	const isMultipart = "multipart/form-data" in content;

	// Try application/json first, then multipart/form-data
	const mediaType = content["application/json"] ?? content["multipart/form-data"];
	if (!mediaType?.schema) return { properties: [], isMultipart };

	const schema = mediaType.schema;
	const bodyProperties: Array<{ name: string; type: string; required: boolean }> = [];

	// Handle array body (e.g. POST /batch)
	if (schema.type === "array" && !schema.properties) {
		const items = schema.items as Record<string, unknown> | undefined;
		const itemType = items ? schemaToTypeString(items, spec) : "unknown";
		return { properties: [], isMultipart, bodyIsArray: true, bodyArrayItemType: itemType };
	}

	// Handle oneOf — merge all properties, mark all as optional
	if (schema.oneOf) {
		const allProps: Record<string, Record<string, unknown>> = {};
		for (const variant of schema.oneOf) {
			const variantProps =
				(variant as { properties?: Record<string, Record<string, unknown>> }).properties ?? {};
			for (const [name, propSchema] of Object.entries(variantProps)) {
				allProps[name] = propSchema;
			}
		}
		for (const [name, propSchema] of Object.entries(allProps)) {
			bodyProperties.push({
				name,
				type: schemaToTypeString(propSchema, spec),
				required: false,
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

	return { properties: bodyProperties, isMultipart };
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
		isMultipart: isGet ? false : body.isMultipart,
		responseType,
		bodyIsArray: isGet ? undefined : body.bodyIsArray,
		bodyArrayItemType: isGet ? undefined : body.bodyArrayItemType,
	};
}
