import { describe, expect, it } from "vitest";
import {
	AuthError,
	HttpError,
	NetworkError,
	NotFoundError,
	RateLimitError,
	RetryExhaustedError,
	ServerError,
} from "../../src/runtime/errors.js";
import { withRetry } from "../../src/runtime/retry.js";

const fastRetry = { maxRetries: 2, baseDelay: 1, maxDelay: 10 };

describe("withRetry", () => {
	it("succeeds on first try", async () => {
		const result = await withRetry(() => Promise.resolve(42), fastRetry);
		expect(result).toBe(42);
	});

	it("retries on RateLimitError and succeeds on 2nd attempt", async () => {
		let attempt = 0;
		const result = await withRetry(() => {
			attempt++;
			if (attempt === 1) {
				throw new RateLimitError("limited", new Headers());
			}
			return Promise.resolve("ok");
		}, fastRetry);
		expect(result).toBe("ok");
		expect(attempt).toBe(2);
	});

	it("retries on ServerError (502) and succeeds on 2nd attempt", async () => {
		let attempt = 0;
		const result = await withRetry(() => {
			attempt++;
			if (attempt === 1) {
				throw new ServerError(502, null, new Headers());
			}
			return Promise.resolve("ok");
		}, fastRetry);
		expect(result).toBe("ok");
		expect(attempt).toBe(2);
	});

	it("retries on ServerError (503) and succeeds on 2nd attempt", async () => {
		let attempt = 0;
		const result = await withRetry(() => {
			attempt++;
			if (attempt === 1) {
				throw new ServerError(503, null, new Headers());
			}
			return Promise.resolve("ok");
		}, fastRetry);
		expect(result).toBe("ok");
	});

	it("gives up after maxRetries", async () => {
		let attempt = 0;
		const promise = withRetry(
			() => {
				attempt++;
				throw new RateLimitError("limited", new Headers());
			},
			{ maxRetries: 2, baseDelay: 1, maxDelay: 5 },
		);
		await expect(promise).rejects.toBeInstanceOf(RetryExhaustedError);
		const error = await promise.catch((e: unknown) => e);
		expect(error).toBeInstanceOf(RetryExhaustedError);
		expect((error as RetryExhaustedError).lastError).toBeInstanceOf(RateLimitError);
		expect((error as RetryExhaustedError).attempts).toBe(3);
		expect(attempt).toBe(3); // initial + 2 retries
	});

	it("throws AuthError immediately without retrying", async () => {
		let attempt = 0;
		const promise = withRetry(() => {
			attempt++;
			throw new AuthError(401, null, new Headers());
		}, fastRetry);
		await expect(promise).rejects.toBeInstanceOf(AuthError);
		expect(attempt).toBe(1);
	});

	it("throws NotFoundError immediately without retrying", async () => {
		let attempt = 0;
		const promise = withRetry(() => {
			attempt++;
			throw new NotFoundError(null, new Headers());
		}, fastRetry);
		await expect(promise).rejects.toBeInstanceOf(NotFoundError);
		expect(attempt).toBe(1);
	});

	it("does not retry ServerError(500)", async () => {
		let attempt = 0;
		const promise = withRetry(() => {
			attempt++;
			throw new ServerError(500, null, new Headers());
		}, fastRetry);
		await expect(promise).rejects.toBeInstanceOf(ServerError);
		expect(attempt).toBe(1);
	});

	it("does not retry generic HttpError (418)", async () => {
		let attempt = 0;
		const promise = withRetry(
			() => {
				attempt++;
				throw new HttpError(418, null, new Headers());
			},
			{ maxRetries: 3, baseDelay: 1, maxDelay: 10 },
		);
		await expect(promise).rejects.toBeInstanceOf(HttpError);
		expect(attempt).toBe(1);
	});

	it("does not retry NetworkError", async () => {
		let attempt = 0;
		const promise = withRetry(() => {
			attempt++;
			throw new NetworkError(new Error("offline"));
		}, fastRetry);
		await expect(promise).rejects.toBeInstanceOf(NetworkError);
		expect(attempt).toBe(1);
	});

	it("uses Retry-After header for RateLimitError delay", async () => {
		let attempt = 0;
		const start = Date.now();
		const result = await withRetry(
			() => {
				attempt++;
				if (attempt === 1) {
					const headers = new Headers({ "retry-after": "0" });
					throw new RateLimitError(null, headers);
				}
				return Promise.resolve("done");
			},
			{ maxRetries: 1, baseDelay: 5000, maxDelay: 10000 },
		);
		const elapsed = Date.now() - start;
		expect(result).toBe("done");
		// Retry-After: 0 means 0ms delay, not the 5000ms baseDelay
		expect(elapsed).toBeLessThan(500);
	});

	it("resolves default config values", async () => {
		const result = await withRetry(() => Promise.resolve(99), {});
		expect(result).toBe(99);
	});
});
