/**
 * Extract response type from an OpenAPI operation's responses.
 */

import { derefShallow } from "../utils/deref.js";
import { schemaToTypeString } from "./types.js";

interface OpenApiSpec {
	[key: string]: unknown;
}

interface ResponseObject {
	content?: Record<
		string,
		{
			schema?: Record<string, unknown>;
		}
	>;
	[key: string]: unknown;
}

interface OperationObject {
	responses?: Record<string, unknown>;
	[key: string]: unknown;
}

export function extractResponseType(operation: OperationObject, spec: OpenApiSpec): string {
	const responses = operation.responses;
	if (!responses) return "unknown";

	const rawSuccess = responses["200"] ?? responses["201"];
	if (!rawSuccess) return "unknown";

	// Resolve $ref on the response itself
	const success = derefShallow<ResponseObject>(rawSuccess, spec);

	const content = success.content;
	if (!content) return "unknown";

	const jsonContent = content["application/json"];
	if (!jsonContent) return "unknown";

	const rawSchema = jsonContent.schema;
	if (!rawSchema) return "unknown";

	// Resolve $ref on the schema
	const schema = derefShallow<Record<string, unknown>>(rawSchema, spec);

	return schemaToTypeString(schema, spec);
}
