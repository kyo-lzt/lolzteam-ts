/**
 * Naming utilities for converting OpenAPI identifiers to TypeScript names.
 */

/** Extract method name from operationId: everything after the first dot, camelCased. */
export function operationIdToMethod(operationId: string): string {
	const parts = operationId.split(".");
	if (parts.length < 2) {
		return lowercaseFirst(operationId);
	}
	const rest = parts.slice(1);
	return rest
		.map((part, i) => {
			if (i === 0) {
				// Fully uppercase segments like "SA" → "sa"
				return isAllUppercase(part) ? part.toLowerCase() : lowercaseFirst(part);
			}
			return capitalizeFirst(isAllUppercase(part) ? part.toLowerCase() : part);
		})
		.join("");
}

/** Extract group name from operationId: first segment, lowercased first char. */
export function operationIdToGroup(operationId: string): string {
	const first = operationId.split(".")[0];
	const group = first ? lowercaseFirst(first) : operationId;
	// Normalize known typos in group names
	if (group === "manging") return "managing";
	return group;
}

/** Convert PascalCase tag to kebab-case file name. */
export function tagToFileName(tag: string): string {
	return tag
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
		.toLowerCase();
}

/** Convert PascalCase tag to camelCase property name. */
export function tagToPropertyName(tag: string): string {
	return lowercaseFirst(tag);
}

/** Convert tag to class name: PascalCase + "Api". */
export function tagToClassName(tag: string): string {
	return `${capitalizeFirst(tag)}Api`;
}

// Backward-compatible aliases used by parser.ts / emitter.ts
export const groupToFileName = tagToFileName;
export const groupToPropertyName = tagToPropertyName;
export const groupToClassName = tagToClassName;

/** Build a type name prefix from group + method. E.g. group "Threads", method "list" -> "ThreadsList". */
export function buildTypeName(group: string, method: string): string {
	return capitalizeFirst(group) + capitalizeFirst(method);
}

function lowercaseFirst(s: string): string {
	if (s.length === 0) return s;
	const first = s[0];
	return first ? first.toLowerCase() + s.slice(1) : s;
}

function capitalizeFirst(s: string): string {
	if (s.length === 0) return s;
	const first = s[0];
	return first ? first.toUpperCase() + s.slice(1) : s;
}

function isAllUppercase(s: string): boolean {
	return s.length > 1 && s === s.toUpperCase();
}
