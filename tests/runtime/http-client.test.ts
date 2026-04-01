import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { HttpError, NetworkError, RetryExhaustedError } from "../../src/runtime/errors.js";
import { HttpClient } from "../../src/runtime/http-client.js";

const originalFetch = globalThis.fetch;

function makeResponse(status: number, body: unknown, headers?: Record<string, string>): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json", ...headers },
	});
}

describe("HttpClient", () => {
	let mockFetch: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		mockFetch = vi.fn(() => Promise.resolve(makeResponse(200, { ok: true })));
		globalThis.fetch = mockFetch;
	});

	// Restore after all
	afterAll(() => {
		globalThis.fetch = originalFetch;
	});

	const createClient = () =>
		new HttpClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 0 },
		});

	it("builds correct URL with query params", async () => {
		const client = createClient();
		await client.request({
			method: "GET",
			path: "/users",
			query: { page: 1, limit: 10, empty: undefined },
		});
		const calledUrl = mockFetch.mock.calls[0]?.[0] as string;
		expect(calledUrl).toBe("https://api.example.com/users?page=1&limit=10");
	});

	it("sends auth header", async () => {
		const client = createClient();
		await client.request({ method: "GET", path: "/me" });
		const calledInit = mockFetch.mock.calls[0]?.[1] as RequestInit;
		const headers = calledInit.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer test-token");
	});

	it("sends form-urlencoded body", async () => {
		const client = createClient();
		await client.request({
			method: "POST",
			path: "/posts",
			body: { title: "hello", content: "world" },
		});
		const calledInit = mockFetch.mock.calls[0]?.[1] as RequestInit;
		const headers = calledInit.headers as Record<string, string>;
		expect(headers["Content-Type"]).toBe("application/x-www-form-urlencoded");
		expect(calledInit.body).toBe("title=hello&content=world");
	});

	it("throws HttpError on non-2xx", async () => {
		mockFetch.mockImplementation(() => Promise.resolve(makeResponse(403, { error: "forbidden" })));
		const client = createClient();
		const promise = client.request({ method: "GET", path: "/admin" });
		await expect(promise).rejects.toBeInstanceOf(HttpError);
	});

	it("throws RetryExhaustedError wrapping NetworkError on fetch failure", async () => {
		mockFetch.mockImplementation(() => Promise.reject(new TypeError("fetch failed")));
		const client = createClient();
		const error = await client.request({ method: "GET", path: "/fail" }).catch((e: unknown) => e);
		expect(error).toBeInstanceOf(RetryExhaustedError);
		expect((error as RetryExhaustedError).lastError).toBeInstanceOf(NetworkError);
	});
});
