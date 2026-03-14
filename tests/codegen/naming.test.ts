import { describe, expect, it } from "bun:test";
import {
	operationIdToGroup,
	operationIdToMethod,
	tagToClassName,
	tagToFileName,
	tagToPropertyName,
} from "../../codegen/src/utils/naming.js";

describe("operationIdToMethod", () => {
	it("Users.SA.Reset → saReset", () => {
		expect(operationIdToMethod("Users.SA.Reset")).toBe("saReset");
	});

	it("Category.All → all", () => {
		expect(operationIdToMethod("Category.All")).toBe("all");
	});

	it("Payments.Invoice.Get → invoiceGet", () => {
		expect(operationIdToMethod("Payments.Invoice.Get")).toBe("invoiceGet");
	});
});

describe("operationIdToGroup", () => {
	it("Users.SA.Reset → users", () => {
		expect(operationIdToGroup("Users.SA.Reset")).toBe("users");
	});

	it("Category.All → category", () => {
		expect(operationIdToGroup("Category.All")).toBe("category");
	});
});

describe("tagToFileName", () => {
	it("AutoPayments → auto-payments", () => {
		expect(tagToFileName("AutoPayments")).toBe("auto-payments");
	});

	it("ProfilePosts → profile-posts", () => {
		expect(tagToFileName("ProfilePosts")).toBe("profile-posts");
	});
});

describe("tagToPropertyName", () => {
	it("AutoPayments → autoPayments", () => {
		expect(tagToPropertyName("AutoPayments")).toBe("autoPayments");
	});
});

describe("tagToClassName", () => {
	it("Users → UsersApi", () => {
		expect(tagToClassName("Users")).toBe("UsersApi");
	});
});
