import { describe, expect, it } from "bun:test";
import { schemaToTypeString } from "../../codegen/src/transforms/types.js";

const emptySpec = {};

describe("schemaToTypeString", () => {
	it("string → string", () => {
		expect(schemaToTypeString({ type: "string" }, emptySpec)).toBe("string");
	});

	it("integer → number", () => {
		expect(schemaToTypeString({ type: "integer" }, emptySpec)).toBe("number");
	});

	it("number → number", () => {
		expect(schemaToTypeString({ type: "number" }, emptySpec)).toBe("number");
	});

	it("boolean → boolean", () => {
		expect(schemaToTypeString({ type: "boolean" }, emptySpec)).toBe("boolean");
	});

	it("array of strings → Array<string>", () => {
		expect(schemaToTypeString({ type: "array", items: { type: "string" } }, emptySpec)).toBe(
			"Array<string>",
		);
	});

	it("object with no properties → Record<string, unknown>", () => {
		expect(schemaToTypeString({ type: "object" }, emptySpec)).toBe("Record<string, unknown>");
	});

	it("enum → string literal union", () => {
		expect(schemaToTypeString({ type: "string", enum: ["a", "b", "c"] }, emptySpec)).toBe(
			'"a" | "b" | "c"',
		);
	});

	it("$ref resolves through spec", () => {
		const spec = {
			components: { schemas: { Foo: { type: "string" } } },
		};
		expect(schemaToTypeString({ $ref: "#/components/schemas/Foo" }, spec)).toBe("string");
	});

	it("oneOf → union", () => {
		expect(schemaToTypeString({ oneOf: [{ type: "string" }, { type: "number" }] }, emptySpec)).toBe(
			"string | number",
		);
	});

	it("multi-type array → union", () => {
		expect(schemaToTypeString({ type: ["string", "integer"] }, emptySpec)).toBe("string | number");
	});

	it("multi-type array with null → union with null", () => {
		expect(schemaToTypeString({ type: ["string", "null"] }, emptySpec)).toBe("string | null");
	});

	it("undefined/empty schema → unknown", () => {
		expect(schemaToTypeString(undefined, emptySpec)).toBe("unknown");
		expect(schemaToTypeString({}, emptySpec)).toBe("unknown");
	});
});
