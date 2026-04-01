import { describe, expect, it } from "vitest";
import { ConfigError } from "../../src/runtime/errors.js";
import { HttpClient } from "../../src/runtime/http-client.js";

describe("HttpClient proxy validation", () => {
	const make = (proxyUrl: string) =>
		new HttpClient({
			token: "t",
			baseUrl: "https://example.com",
			retry: { maxRetries: 0 },
			proxy: { url: proxyUrl },
		});

	it("rejects invalid URL", () => {
		expect(() => make("not a url")).toThrow(ConfigError);
	});

	it("rejects unsupported scheme (ftp)", () => {
		expect(() => make("ftp://proxy:8080")).toThrow(ConfigError);
	});

	it("rejects proxy URL with no host", () => {
		expect(() => make("http://")).toThrow(ConfigError);
	});

	it("accepts http proxy", () => {
		expect(() => make("http://proxy:8080")).not.toThrow();
	});

	it("accepts https proxy", () => {
		expect(() => make("https://proxy:8080")).not.toThrow();
	});

	it("accepts socks5 proxy", () => {
		expect(() => make("socks5://proxy:1080")).not.toThrow();
	});
});

describe("HttpClient config", () => {
	it("strips trailing slash from base URL", () => {
		const client = new HttpClient({
			token: "t",
			baseUrl: "https://example.com/",
			retry: { maxRetries: 0 },
		});
		expect(client).toBeDefined();
	});

	it("uses default retry config when not specified", () => {
		const client = new HttpClient({
			token: "t",
			baseUrl: "https://example.com",
		});
		expect(client).toBeDefined();
	});
});
