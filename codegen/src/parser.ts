/**
 * Parse an OpenAPI spec into grouped operation definitions.
 */

import type { MethodDefinition } from "./transforms/operations.js";
import { extractMethodDefinition } from "./transforms/operations.js";
import { deref } from "./utils/deref.js";
import { operationIdToGroup, operationIdToMethod } from "./utils/naming.js";

interface OpenApiSpec {
	paths: Record<string, Record<string, Record<string, unknown>>>;
	components?: {
		schemas?: Record<string, Record<string, unknown>>;
		parameters?: Record<string, Record<string, unknown>>;
		responses?: Record<string, Record<string, unknown>>;
	};
	servers?: Array<{ url: string }>;
	[key: string]: unknown;
}

export interface ParsedGroup {
	groupName: string;
	methods: MethodDefinition[];
}

export interface ComponentSchemas {
	[name: string]: Record<string, unknown>;
}

export interface ParseResult {
	groups: ParsedGroup[];
	componentSchemas: ComponentSchemas;
	baseUrl: string;
}

const HTTP_METHODS = ["get", "post", "put", "delete", "patch"] as const;

export function parseSpec(rawSpec: Record<string, unknown>): ParseResult {
	// Resolve all $refs first
	const spec = deref<OpenApiSpec>(rawSpec, rawSpec as OpenApiSpec);

	const groupMap = new Map<string, MethodDefinition[]>();

	for (const [path, pathItem] of Object.entries(spec.paths)) {
		for (const method of HTTP_METHODS) {
			const operation = pathItem[method];
			if (!operation || typeof operation !== "object") continue;

			const op = operation as Record<string, unknown>;
			const operationId = op.operationId;
			if (typeof operationId !== "string") continue;

			const group = operationIdToGroup(operationId);
			const methodName = operationIdToMethod(operationId);

			const methodDef = extractMethodDefinition(
				operationId,
				methodName,
				method,
				path,
				op as Parameters<typeof extractMethodDefinition>[4],
			);

			const existing = groupMap.get(group);
			if (existing) {
				existing.push(methodDef);
			} else {
				groupMap.set(group, [methodDef]);
			}
		}
	}

	const groups: ParsedGroup[] = [];
	for (const [groupName, methods] of groupMap) {
		groups.push({ groupName, methods });
	}

	const componentSchemas: ComponentSchemas = {};
	if (spec.components?.schemas) {
		for (const [name, schema] of Object.entries(spec.components.schemas)) {
			componentSchemas[name] = schema;
		}
	}

	const servers = spec.servers;
	const baseUrl =
		servers && servers.length > 0 && servers[0] ? servers[0].url : "https://localhost";

	return { groups, componentSchemas, baseUrl };
}
