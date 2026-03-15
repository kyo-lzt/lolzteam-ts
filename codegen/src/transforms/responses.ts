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
	if (!jsonContent) {
		// Fallback: text/html or text/plain → string
		if (content["text/html"] || content["text/plain"]) {
			return "string";
		}
		return "unknown";
	}

	const rawSchema = jsonContent.schema;
	if (!rawSchema) return "unknown";

	// Pass rawSchema directly — schemaToTypeString already handles $ref
	// (derefShallow against empty spec from extractMethodDefinition would lose the ref)
	return schemaToTypeString(rawSchema, spec);
}
