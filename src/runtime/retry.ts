import { NetworkError, RateLimitError, RetryExhaustedError, ServerError } from "./errors.js";
import type { RetryConfig, RetryInfo } from "./types.js";

const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_BASE_DELAY = 1000;
const DEFAULT_MAX_DELAY = 30000;

function isRetryable(error: unknown): boolean {
	if (error instanceof RateLimitError) {
		return true;
	}
	if (
		error instanceof ServerError &&
		(error.status === 502 || error.status === 503 || error.status === 504)
	) {
		return true;
	}
	if (error instanceof NetworkError && error.isTransient) {
		return true;
	}
	return false;
}

interface ResolvedConfig {
	maxRetries: number;
	baseDelay: number;
	maxDelay: number;
}

function computeDelay(attempt: number, config: ResolvedConfig, error: unknown): number {
	if (error instanceof RateLimitError && error.retryAfter !== undefined) {
		return error.retryAfter;
	}
	const exponential = config.baseDelay * 2 ** attempt;
	const jitter = Math.random() * config.baseDelay;
	return Math.min(exponential + jitter, config.maxDelay);
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withRetry<T>(
	fn: () => Promise<T>,
	config: RetryConfig,
	context?: { method: string; path: string },
	onRetry?: (info: RetryInfo) => void,
): Promise<T> {
	const resolved: ResolvedConfig = {
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
			if (!isRetryable(error)) {
				throw error;
			}
			if (attempt === resolved.maxRetries) {
				throw new RetryExhaustedError(attempt + 1, error);
			}
			const delay = computeDelay(attempt, resolved, error);
			if (onRetry && context) {
				onRetry({
					attempt,
					delay,
					error,
					method: context.method,
					path: context.path,
				});
			}
			await sleep(delay);
		}
	}

	throw new RetryExhaustedError(resolved.maxRetries + 1, lastError);
}
