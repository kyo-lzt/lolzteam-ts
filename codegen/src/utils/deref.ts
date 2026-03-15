/**
 * Recursive $ref resolver for OpenAPI schemas.
 */

interface OpenApiSpec {
	components?: {
		schemas?: Record<string, unknown>;
		parameters?: Record<string, unknown>;
		responses?: Record<string, unknown>;
	};
	[key: string]: unknown;
}

/**
 * Follow a JSON pointer path like `#/components/schemas/Foo` through a spec object.
 */
export function resolveRef(ref: string, spec: Record<string, unknown>): unknown {
	const parts = ref.replace(/^#\//, "").split("/");
	let current: unknown = spec;
	for (const part of parts) {
		if (current === null || current === undefined || typeof current !== "object") {
			return undefined;
		}
		current = (current as Record<string, unknown>)[part];
	}
	return current;
}

function isRefObject(value: unknown): value is { $ref: string } {
	return (
		typeof value === "object" &&
		value !== null &&
		"$ref" in value &&
		typeof (value as Record<string, unknown>).$ref === "string"
	);
}

/**
 * Recursively resolve all `$ref` pointers in an object.
 * Tracks visited refs to avoid infinite loops on circular references.
 */
export function deref<T = unknown>(value: unknown, spec: OpenApiSpec, visited?: Set<string>): T {
	const seen = visited ?? new Set<string>();

	if (isRefObject(value)) {
		const ref = value.$ref;
		// Preserve component schema refs — they map to named types
		if (ref.startsWith("#/components/schemas/")) {
			return value as T;
		}
		if (seen.has(ref)) {
			// Circular ref — return empty object to avoid infinite loop
			return {} as T;
		}
		seen.add(ref);
		const resolved = resolveRef(ref, spec as Record<string, unknown>);
		return deref<T>(resolved, spec, seen);
	}

	if (Array.isArray(value)) {
		return value.map((item) => deref(item, spec, new Set(seen))) as T;
	}

	if (typeof value === "object" && value !== null) {
		const result: Record<string, unknown> = {};
		for (const [key, val] of Object.entries(value)) {
			result[key] = deref(val, spec, new Set(seen));
		}
		return result as T;
	}

	return value as T;
}

/**
 * Shallow $ref resolution — only resolves the top-level ref, does not recurse into children.
 */
export function derefShallow<T = unknown>(value: unknown, spec: OpenApiSpec): T {
	if (isRefObject(value)) {
		const resolved = resolveRef(value.$ref, spec as Record<string, unknown>);
		if (isRefObject(resolved)) {
			return derefShallow<T>(resolved, spec);
		}
		return resolved as T;
	}
	return value as T;
}
