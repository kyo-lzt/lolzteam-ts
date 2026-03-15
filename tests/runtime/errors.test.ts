import { describe, expect, it } from "bun:test";
import {
	AuthError,
	ConfigError,
	HttpError,
	LolzteamError,
	NetworkError,
	NotFoundError,
	RateLimitError,
	ServerError,
	createHttpError,
} from "../../src/runtime/errors.js";

describe("createHttpError", () => {
	const headers = new Headers();
	const body = { error: "test" };

	it("returns AuthError for 401", () => {
		const err = createHttpError(401, body, headers);
		expect(err).toBeInstanceOf(AuthError);
		expect(err.status).toBe(401);
	});

	it("returns AuthError for 403", () => {
		const err = createHttpError(403, body, headers);
		expect(err).toBeInstanceOf(AuthError);
		expect(err.status).toBe(403);
	});

	it("returns NotFoundError for 404", () => {
		const err = createHttpError(404, body, headers);
		expect(err).toBeInstanceOf(NotFoundError);
		expect(err.status).toBe(404);
	});

	it("returns RateLimitError for 429", () => {
		const err = createHttpError(429, body, headers);
		expect(err).toBeInstanceOf(RateLimitError);
		expect(err.status).toBe(429);
	});

	it("returns ServerError for 500", () => {
		const err = createHttpError(500, body, headers);
		expect(err).toBeInstanceOf(ServerError);
		expect(err.status).toBe(500);
	});

	it("returns ServerError for 502", () => {
		const err = createHttpError(502, body, headers);
		expect(err).toBeInstanceOf(ServerError);
		expect(err.status).toBe(502);
	});

	it("returns plain HttpError for unknown status", () => {
		const err = createHttpError(418, body, headers);
		expect(err).toBeInstanceOf(HttpError);
		expect(err.constructor).toBe(HttpError);
	});
});

describe("RateLimitError", () => {
	it("parses Retry-After header into milliseconds", () => {
		const headers = new Headers({ "retry-after": "5" });
		const err = new RateLimitError("rate limited", headers);
		expect(err.retryAfter).toBe(5000);
	});

	it("sets retryAfter to undefined when header missing", () => {
		const err = new RateLimitError("rate limited", new Headers());
		expect(err.retryAfter).toBeUndefined();
	});
});

describe("error hierarchy", () => {
	const headers = new Headers();

	it("HttpError extends LolzteamError", () => {
		expect(new HttpError(400, null, headers)).toBeInstanceOf(LolzteamError);
		expect(new HttpError(400, null, headers)).toBeInstanceOf(Error);
	});

	it("AuthError extends HttpError", () => {
		expect(new AuthError(401, null, headers)).toBeInstanceOf(HttpError);
		expect(new AuthError(401, null, headers)).toBeInstanceOf(LolzteamError);
	});

	it("NotFoundError extends HttpError", () => {
		expect(new NotFoundError(null, headers)).toBeInstanceOf(HttpError);
	});

	it("RateLimitError extends HttpError", () => {
		expect(new RateLimitError(null, headers)).toBeInstanceOf(HttpError);
	});

	it("ServerError extends HttpError", () => {
		expect(new ServerError(500, null, headers)).toBeInstanceOf(HttpError);
	});

	it("NetworkError extends LolzteamError but not HttpError", () => {
		const err = new NetworkError(new Error("fail"));
		expect(err).toBeInstanceOf(LolzteamError);
		expect(err).not.toBeInstanceOf(HttpError);
	});

	it("ConfigError extends LolzteamError but not HttpError", () => {
		const err = new ConfigError("bad config");
		expect(err).toBeInstanceOf(LolzteamError);
		expect(err).not.toBeInstanceOf(HttpError);
		expect(err.message).toBe("bad config");
	});

	it("NetworkError uses cause message", () => {
		const err = new NetworkError(new TypeError("DNS failed"));
		expect(err.message).toBe("DNS failed");
	});

	it("NetworkError falls back to generic message for non-Error cause", () => {
		const err = new NetworkError("just a string");
		expect(err.message).toBe("Network error");
	});
});
