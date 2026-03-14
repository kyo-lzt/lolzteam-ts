import { afterAll, beforeEach, describe, expect, it, mock } from "bun:test";
import { ForumClient } from "../src/generated/forum/index.js";
import { MarketClient } from "../src/generated/market/index.js";
import {
	AuthError,
	ConfigError,
	HttpError,
	LolzteamError,
	NetworkError,
	NotFoundError,
	RateLimitError,
	ServerError,
} from "../src/runtime/errors.js";

const originalFetch = globalThis.fetch;

function makeResponse(status: number, body: unknown, headers?: Record<string, string>): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json", ...headers },
	});
}

// ─── Base Client Behavior ────────────────────────────────────────────────────

describe("Base client behavior", () => {
	let mockFetch: ReturnType<typeof mock>;

	beforeEach(() => {
		mockFetch = mock(() => Promise.resolve(makeResponse(200, { ok: true })));
		globalThis.fetch = mockFetch;
	});

	afterAll(() => {
		globalThis.fetch = originalFetch;
	});

	const createForum = (overrides?: Record<string, unknown>) =>
		new ForumClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
			...overrides,
		});

	it("makes a successful request and returns parsed JSON", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(200, { threads: [], pagination: {} })),
		);
		const client = createForum();
		const result = await client.threads.list();
		expect(result).toEqual({ threads: [], pagination: {} });
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});

	it("sends Authorization: Bearer header", async () => {
		const client = createForum();
		await client.threads.list();
		const calledInit = mockFetch.mock.calls[0]?.[1] as RequestInit;
		const headers = calledInit.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer test-token");
	});

	it("throws AuthError on 401", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(401, { error: "unauthorized" })),
		);
		const client = createForum();
		await expect(client.threads.list()).rejects.toBeInstanceOf(AuthError);
	});

	it("throws AuthError on 403", async () => {
		mockFetch.mockImplementation(() => Promise.resolve(makeResponse(403, { error: "forbidden" })));
		const client = createForum();
		await expect(client.threads.list()).rejects.toBeInstanceOf(AuthError);
	});

	it("throws NotFoundError on 404", async () => {
		mockFetch.mockImplementation(() => Promise.resolve(makeResponse(404, { error: "not found" })));
		const client = createForum();
		await expect(client.threads.get(999)).rejects.toBeInstanceOf(NotFoundError);
	});

	it("throws RateLimitError on 429 with no retries", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(429, { error: "rate limited" }, { "retry-after": "1" })),
		);
		const client = createForum();
		await expect(client.threads.list()).rejects.toBeInstanceOf(RateLimitError);
	});

	it("retries on 429 then succeeds", async () => {
		let callCount = 0;
		mockFetch.mockImplementation(() => {
			callCount++;
			if (callCount === 1) {
				return Promise.resolve(
					makeResponse(429, { error: "rate limited" }, { "retry-after": "0" }),
				);
			}
			return Promise.resolve(makeResponse(200, { ok: true }));
		});
		const client = new ForumClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 1, baseDelay: 1, maxDelay: 10 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		const result = await client.threads.list();
		expect(result).toEqual({ ok: true });
		expect(callCount).toBe(2);
	});

	it("retries on 429 and raises after max retries", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(429, { error: "rate limited" }, { "retry-after": "0" })),
		);
		const client = new ForumClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 2, baseDelay: 1, maxDelay: 10 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		await expect(client.threads.list()).rejects.toBeInstanceOf(RateLimitError);
		expect(mockFetch.mock.calls.length).toBe(3); // initial + 2 retries
	});

	it("retries on 502 and 503 (ServerError)", async () => {
		let callCount = 0;
		mockFetch.mockImplementation(() => {
			callCount++;
			if (callCount === 1) {
				return Promise.resolve(makeResponse(502, { error: "bad gateway" }));
			}
			return Promise.resolve(makeResponse(200, { ok: true }));
		});
		const client = new ForumClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 1, baseDelay: 1, maxDelay: 10 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		const result = await client.threads.list();
		expect(result).toEqual({ ok: true });
		expect(callCount).toBe(2);
	});

	it("does not retry on non-retryable errors (e.g. 400)", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(400, { error: "bad request" })),
		);
		const client = new ForumClient({
			token: "test-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 3, baseDelay: 1, maxDelay: 10 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		await expect(client.threads.list()).rejects.toBeInstanceOf(HttpError);
		expect(mockFetch.mock.calls.length).toBe(1);
	});

	it("throws NetworkError when fetch itself fails", async () => {
		mockFetch.mockImplementation(() => Promise.reject(new TypeError("fetch failed")));
		const client = createForum();
		await expect(client.threads.list()).rejects.toBeInstanceOf(NetworkError);
	});
});

// ─── ForumClient ─────────────────────────────────────────────────────────────

describe("ForumClient", () => {
	let mockFetch: ReturnType<typeof mock>;

	beforeEach(() => {
		mockFetch = mock(() => Promise.resolve(makeResponse(200, { ok: true })));
		globalThis.fetch = mockFetch;
	});

	afterAll(() => {
		globalThis.fetch = originalFetch;
	});

	const createForum = () =>
		new ForumClient({
			token: "forum-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
		});

	it("has all expected API properties", () => {
		const client = createForum();
		expect(client.oAuth).toBeDefined();
		expect(client.assets).toBeDefined();
		expect(client.categories).toBeDefined();
		expect(client.forums).toBeDefined();
		expect(client.links).toBeDefined();
		expect(client.pages).toBeDefined();
		expect(client.navigation).toBeDefined();
		expect(client.threads).toBeDefined();
		expect(client.posts).toBeDefined();
		expect(client.users).toBeDefined();
		expect(client.profilePosts).toBeDefined();
		expect(client.conversations).toBeDefined();
		expect(client.notifications).toBeDefined();
		expect(client.tags).toBeDefined();
		expect(client.search).toBeDefined();
		expect(client.batch).toBeDefined();
		expect(client.chatbox).toBeDefined();
		expect(client.forms).toBeDefined();
	});

	it("threads.list() sends GET /threads", async () => {
		const client = createForum();
		await client.threads.list();
		const url = mockFetch.mock.calls[0]?.[0] as string;
		const init = mockFetch.mock.calls[0]?.[1] as RequestInit;
		expect(url).toBe("https://api.example.com/threads");
		expect(init.method).toBe("GET");
	});

	it("threads.list() passes query params", async () => {
		const client = createForum();
		await client.threads.list({ forum_id: 42, page: 2 });
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toContain("forum_id=42");
		expect(url).toContain("page=2");
	});

	it("threads.get(id) sends GET /threads/:id", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(200, { thread: { thread_id: 123 } })),
		);
		const client = createForum();
		const result = await client.threads.get(123);
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toBe("https://api.example.com/threads/123");
		expect(result).toEqual({ thread: { thread_id: 123 } });
	});

	it("users.get(id) sends GET /users/:id", async () => {
		mockFetch.mockImplementation(() =>
			Promise.resolve(makeResponse(200, { user: { user_id: 5 } })),
		);
		const client = createForum();
		const result = await client.users.get(5);
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toBe("https://api.example.com/users/5");
		expect(result).toEqual({ user: { user_id: 5 } });
	});

	it("uses default base URL https://prod-api.lolz.live when not specified", async () => {
		const client = new ForumClient({
			token: "t",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		await client.threads.list();
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toStartWith("https://prod-api.lolz.live/threads");
	});
});

// ─── MarketClient ────────────────────────────────────────────────────────────

describe("MarketClient", () => {
	let mockFetch: ReturnType<typeof mock>;

	beforeEach(() => {
		mockFetch = mock(() => Promise.resolve(makeResponse(200, { ok: true })));
		globalThis.fetch = mockFetch;
	});

	afterAll(() => {
		globalThis.fetch = originalFetch;
	});

	const createMarket = () =>
		new MarketClient({
			token: "market-token",
			baseUrl: "https://api.example.com",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
		});

	it("has all expected API properties", () => {
		const client = createMarket();
		expect(client.category).toBeDefined();
		expect(client.list).toBeDefined();
		expect(client.managing).toBeDefined();
		expect(client.profile).toBeDefined();
		expect(client.cart).toBeDefined();
		expect(client.purchasing).toBeDefined();
		expect(client.customDiscounts).toBeDefined();
		expect(client.publishing).toBeDefined();
		expect(client.payments).toBeDefined();
		expect(client.autoPayments).toBeDefined();
		expect(client.proxy).toBeDefined();
		expect(client.imap).toBeDefined();
		expect(client.batch).toBeDefined();
	});

	it("category.all() sends GET /", async () => {
		mockFetch.mockImplementation(() => Promise.resolve(makeResponse(200, { categories: [] })));
		const client = createMarket();
		const result = await client.category.all();
		const url = mockFetch.mock.calls[0]?.[0] as string;
		const init = mockFetch.mock.calls[0]?.[1] as RequestInit;
		expect(url).toBe("https://api.example.com/");
		expect(init.method).toBe("GET");
		expect(result).toEqual({ categories: [] });
	});

	it("uses custom base URL", async () => {
		const client = new MarketClient({
			token: "t",
			baseUrl: "https://custom.market.api",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		await client.category.all();
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toStartWith("https://custom.market.api/");
	});

	it("uses default base URL https://prod-api.lzt.market when not specified", async () => {
		const client = new MarketClient({
			token: "t",
			retry: { maxRetries: 0 },
			rateLimit: { requestsPerMinute: 99999 },
		});
		await client.category.all();
		const url = mockFetch.mock.calls[0]?.[0] as string;
		expect(url).toStartWith("https://prod-api.lzt.market/");
	});

	it("sends Authorization: Bearer with market token", async () => {
		const client = createMarket();
		await client.category.all();
		const init = mockFetch.mock.calls[0]?.[1] as RequestInit;
		const headers = init.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer market-token");
	});
});

// ─── Proxy Validation ────────────────────────────────────────────────────────

describe("Proxy validation", () => {
	it("rejects invalid URL", () => {
		expect(
			() =>
				new ForumClient({
					token: "t",
					proxy: { url: "not a url" },
					retry: { maxRetries: 0 },
				}),
		).toThrow(ConfigError);
	});

	it("rejects unsupported scheme", () => {
		expect(
			() =>
				new ForumClient({
					token: "t",
					proxy: { url: "ftp://proxy:8080" },
					retry: { maxRetries: 0 },
				}),
		).toThrow(ConfigError);
	});

	it("rejects proxy URL with no host", () => {
		expect(
			() =>
				new ForumClient({
					token: "t",
					proxy: { url: "http://" },
					retry: { maxRetries: 0 },
				}),
		).toThrow(ConfigError);
	});

	it("accepts valid http proxy", () => {
		const client = new ForumClient({
			token: "t",
			proxy: { url: "http://proxy:8080" },
			retry: { maxRetries: 0 },
		});
		expect(client).toBeDefined();
	});

	it("accepts valid socks5 proxy", () => {
		const client = new ForumClient({
			token: "t",
			proxy: { url: "socks5://proxy:1080" },
			retry: { maxRetries: 0 },
		});
		expect(client).toBeDefined();
	});
});

// ─── Error Hierarchy ─────────────────────────────────────────────────────────

describe("Error hierarchy", () => {
	it("LolzteamError is base class", () => {
		const err = new LolzteamError("test");
		expect(err).toBeInstanceOf(Error);
		expect(err).toBeInstanceOf(LolzteamError);
		expect(err.message).toBe("test");
	});

	it("HttpError extends LolzteamError", () => {
		const err = new HttpError(400, {}, new Headers());
		expect(err).toBeInstanceOf(LolzteamError);
		expect(err).toBeInstanceOf(HttpError);
		expect(err.status).toBe(400);
	});

	it("AuthError extends HttpError", () => {
		const err = new AuthError(401, {}, new Headers());
		expect(err).toBeInstanceOf(HttpError);
		expect(err).toBeInstanceOf(AuthError);
		expect(err.status).toBe(401);
	});

	it("NotFoundError extends HttpError with status 404", () => {
		const err = new NotFoundError({}, new Headers());
		expect(err).toBeInstanceOf(HttpError);
		expect(err).toBeInstanceOf(NotFoundError);
		expect(err.status).toBe(404);
	});

	it("RateLimitError extends HttpError with status 429", () => {
		const headers = new Headers({ "retry-after": "5" });
		const err = new RateLimitError({}, headers);
		expect(err).toBeInstanceOf(HttpError);
		expect(err).toBeInstanceOf(RateLimitError);
		expect(err.status).toBe(429);
		expect(err.retryAfter).toBe(5000);
	});

	it("RateLimitError has undefined retryAfter when header missing", () => {
		const err = new RateLimitError({}, new Headers());
		expect(err.retryAfter).toBeUndefined();
	});

	it("ServerError extends HttpError", () => {
		const err = new ServerError(502, {}, new Headers());
		expect(err).toBeInstanceOf(HttpError);
		expect(err).toBeInstanceOf(ServerError);
		expect(err.status).toBe(502);
	});

	it("NetworkError extends LolzteamError but not HttpError", () => {
		const cause = new TypeError("connection refused");
		const err = new NetworkError(cause);
		expect(err).toBeInstanceOf(LolzteamError);
		expect(err).toBeInstanceOf(NetworkError);
		expect(err).not.toBeInstanceOf(HttpError);
		expect(err.message).toBe("connection refused");
		expect(err.cause).toBe(cause);
	});

	it("NetworkError handles non-Error cause", () => {
		const err = new NetworkError("string cause");
		expect(err.message).toBe("Network error");
		expect(err.cause).toBe("string cause");
	});
});
