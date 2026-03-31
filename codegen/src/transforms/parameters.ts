/**
 * Extract and classify parameters from an OpenAPI operation.
 */

import { derefShallow } from "../utils/deref.js";
import { schemaToTypeString } from "./types.js";

interface OpenApiSpec {
	[key: string]: unknown;
}

interface ParameterObject {
	name: string;
	in: "path" | "query" | "header" | "cookie";
	required?: boolean;
	description?: string;
	schema?: {
		type?: string | string[];
		enum?: unknown[];
		items?: Record<string, unknown>;
		[key: string]: unknown;
	};
	$ref?: string;
	[key: string]: unknown;
}

export interface ParsedParameter {
	name: string;
	type: string;
	required: boolean;
	defaultValue?: unknown;
	enumValues?: string[];
	description?: string;
}

export interface OperationParameters {
	pathParams: ParsedParameter[];
	queryParams: ParsedParameter[];
}

export function extractParameters(
	operation: { parameters?: unknown[] },
	spec: OpenApiSpec,
): OperationParameters {
	const pathParams: ParsedParameter[] = [];
	const queryParams: ParsedParameter[] = [];

	const rawParams = operation.parameters ?? [];

	for (const rawParam of rawParams) {
		// Resolve $ref if present
		const param = derefShallow<ParameterObject>(rawParam, spec);

		if (param.in === "header" || param.in === "cookie") {
			continue;
		}

		const enumValues = param.schema?.enum?.filter((v): v is string => typeof v === "string") ?? [];

		const description =
			typeof param.description === "string" && param.description.length > 0
				? param.description
				: undefined;

		const parsed: ParsedParameter = {
			name: param.name,
			required: param.required ?? false,
			type: schemaToTypeString(param.schema, spec),
			defaultValue: param.schema?.default,
			enumValues: enumValues.length > 0 ? enumValues : undefined,
			description,
		};

		if (param.in === "path") {
			parsed.required = true; // path params are always required
			pathParams.push(parsed);
		} else if (param.in === "query") {
			queryParams.push(parsed);
		}
	}

	return { pathParams, queryParams };
}
