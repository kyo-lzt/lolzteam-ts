import { describe, expect, it } from "bun:test";
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
});
