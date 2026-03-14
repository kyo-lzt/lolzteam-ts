import { describe, expect, it } from "bun:test";
import { AuthError, NotFoundError, RateLimitError, ServerError } from "../../src/runtime/errors.js";
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
		await expect(promise).rejects.toBeInstanceOf(RateLimitError);
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
});
