import { RateLimitError, ServerError } from "./errors.js";
import type { RetryConfig } from "./types.js";

const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_BASE_DELAY = 1000;
const DEFAULT_MAX_DELAY = 30000;

function isRetryable(error: unknown): boolean {
	if (error instanceof RateLimitError) {
		return true;
	}
	if (error instanceof ServerError && (error.status === 502 || error.status === 503)) {
		return true;
	}
	return false;
}

function computeDelay(attempt: number, config: Required<RetryConfig>, error: unknown): number {
	if (error instanceof RateLimitError && error.retryAfter !== undefined) {
		return Math.min(error.retryAfter, config.maxDelay);
	}
	const exponential = config.baseDelay * 2 ** attempt;
	const jitter = Math.random() * config.baseDelay;
	return Math.min(exponential + jitter, config.maxDelay);
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withRetry<T>(fn: () => Promise<T>, config: RetryConfig): Promise<T> {
	const resolved: Required<RetryConfig> = {
		maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
		baseDelay: config.baseDelay ?? DEFAULT_BASE_DELAY,
		maxDelay: config.maxDelay ?? DEFAULT_MAX_DELAY,
	};

	let lastError: unknown;
	for (let attempt = 0; attempt <= resolved.maxRetries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			lastError = error;
			if (!isRetryable(error) || attempt === resolved.maxRetries) {
				throw error;
			}
			const delay = computeDelay(attempt, resolved, error);
			await sleep(delay);
		}
	}

	throw lastError;
}
