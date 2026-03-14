export class RateLimiter {
	private tokens: number;
	private readonly maxTokens: number;
	private readonly refillRate: number; // tokens per ms
	private lastRefill: number;
	private readonly queue: Array<() => void> = [];
	private drainScheduled = false;

	constructor(requestsPerMinute: number) {
		this.maxTokens = requestsPerMinute;
		this.tokens = requestsPerMinute;
		this.refillRate = requestsPerMinute / 60000;
		this.lastRefill = Date.now();
	}

	async acquire(): Promise<void> {
		this.refill();
		if (this.tokens >= 1) {
			this.tokens -= 1;
			return;
		}
		return new Promise<void>((resolve) => {
			this.queue.push(resolve);
			this.scheduleDrain();
		});
	}

	private scheduleDrain(): void {
		if (this.drainScheduled) {
			return;
		}
		this.drainScheduled = true;
		const waitMs = (1 - this.tokens) / this.refillRate;
		setTimeout(() => {
			this.drainScheduled = false;
			this.refill();
			this.drainQueue();
		}, Math.ceil(waitMs));
	}

	private drainQueue(): void {
		while (this.queue.length > 0 && this.tokens >= 1) {
			this.tokens -= 1;
			const resolve = this.queue.shift();
			resolve?.();
		}
		if (this.queue.length > 0) {
			this.scheduleDrain();
		}
	}

	private refill(): void {
		const now = Date.now();
		const elapsed = now - this.lastRefill;
		this.tokens = Math.min(this.maxTokens, this.tokens + elapsed * this.refillRate);
		this.lastRefill = now;
	}
}
