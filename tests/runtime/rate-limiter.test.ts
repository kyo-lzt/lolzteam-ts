import { describe, expect, it } from "vitest";
import { RateLimiter } from "../../src/runtime/rate-limiter.js";

describe("RateLimiter", () => {
	it("allows requests within limit", async () => {
		const limiter = new RateLimiter(60); // 60 req/min = 1 per sec
		// Should not block for first few requests (bucket starts full)
		const start = Date.now();
		for (let i = 0; i < 5; i++) {
			await limiter.acquire();
		}
		const elapsed = Date.now() - start;
		expect(elapsed).toBeLessThan(100);
	});

	it("delays when tokens exhausted", async () => {
		const limiter = new RateLimiter(6000); // 100 per sec
		// Drain all tokens
		for (let i = 0; i < 6000; i++) {
			await limiter.acquire();
		}
		// Next acquire should wait
		const start = Date.now();
		await limiter.acquire();
		const elapsed = Date.now() - start;
		expect(elapsed).toBeGreaterThan(0);
	});

	it("refills tokens over time", async () => {
		const limiter = new RateLimiter(60); // 1 per sec
		// Drain all tokens
		for (let i = 0; i < 60; i++) {
			await limiter.acquire();
		}
		// Wait for a token refill (at 1/sec, wait ~1100ms for safety)
		await new Promise((r) => setTimeout(r, 1100));
		const start = Date.now();
		await limiter.acquire();
		const elapsed = Date.now() - start;
		// Should be near-instant since token refilled
		expect(elapsed).toBeLessThan(100);
	});

	it("handles concurrent acquires via queue", async () => {
		const limiter = new RateLimiter(120); // 2 per sec
		// Drain all tokens
		for (let i = 0; i < 120; i++) {
			await limiter.acquire();
		}
		// Queue up several requests concurrently
		const results = await Promise.all([
			limiter.acquire().then(() => "a"),
			limiter.acquire().then(() => "b"),
		]);
		expect(results).toHaveLength(2);
	});
});
