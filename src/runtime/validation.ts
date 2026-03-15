import { ValidationError } from "./errors.js";

export function validateEnum(field: string, value: unknown, allowed: readonly string[]): void {
	if (value === undefined) return;
	if (typeof value === "string" && allowed.includes(value)) return;
	throw new ValidationError(field, value, allowed);
}
