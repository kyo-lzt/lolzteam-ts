import { describe, expect, it } from "bun:test";
import { deref, resolveRef } from "../../codegen/src/utils/deref.js";

describe("resolveRef", () => {
	it("follows JSON pointer paths", () => {
		const spec = {
			components: {
				schemas: {
					User: { type: "object", properties: { id: { type: "integer" } } },
				},
			},
		};
		const result = resolveRef("#/components/schemas/User", spec);
		expect(result).toEqual({
			type: "object",
			properties: { id: { type: "integer" } },
		});
	});

	it("returns undefined for missing paths", () => {
		expect(resolveRef("#/components/schemas/Missing", {})).toBeUndefined();
	});
});

describe("deref", () => {
	const spec = {
		components: {
			schemas: {
				Name: { type: "string" },
				User: {
					type: "object",
					properties: {
						name: { $ref: "#/components/schemas/Name" },
					},
				},
			},
		},
	};

	it("resolves $ref objects", () => {
		const result = deref({ $ref: "#/components/schemas/Name" }, spec);
		expect(result).toEqual({ type: "string" });
	});

	it("recursively resolves nested $refs", () => {
		const result = deref({ $ref: "#/components/schemas/User" }, spec);
		expect(result).toEqual({
			type: "object",
			properties: {
				name: { type: "string" },
			},
		});
	});

	it("handles circular refs without infinite loop", () => {
		const circularSpec = {
			components: {
				schemas: {
					Node: {
						type: "object",
						properties: {
							child: { $ref: "#/components/schemas/Node" },
						},
					},
				},
			},
		};
		// Should not throw / hang
		const result = deref({ $ref: "#/components/schemas/Node" }, circularSpec);
		expect(result).toBeDefined();
	});

	it("passes through primitives unchanged", () => {
		expect(deref("hello", spec)).toBe("hello");
		expect(deref(42, spec)).toBe(42);
		expect(deref(null, spec)).toBeNull();
	});
});
