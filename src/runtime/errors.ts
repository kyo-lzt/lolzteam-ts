export class LolzteamError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "LolzteamError";
	}
}

export class HttpError extends LolzteamError {
	readonly status: number;
	readonly body: unknown;
	readonly headers: Headers;
	readonly parseError?: unknown;

	constructor(status: number, body: unknown, headers: Headers, parseError?: unknown) {
		super(`HTTP ${status}`);
		this.name = "HttpError";
		this.status = status;
		this.body = body;
		this.headers = headers;
		this.parseError = parseError;
	}
}

export class RateLimitError extends HttpError {
	readonly retryAfter: number | undefined;

	constructor(body: unknown, headers: Headers, parseError?: unknown) {
		super(429, body, headers, parseError);
		this.name = "RateLimitError";
		const raw = headers.get("retry-after");
		this.retryAfter = raw !== null ? Number(raw) * 1000 : undefined;
	}
}

export class AuthError extends HttpError {
	constructor(status: number, body: unknown, headers: Headers, parseError?: unknown) {
		super(status, body, headers, parseError);
		this.name = "AuthError";
	}
}

export class NotFoundError extends HttpError {
	constructor(body: unknown, headers: Headers, parseError?: unknown) {
		super(404, body, headers, parseError);
		this.name = "NotFoundError";
	}
}

export class ServerError extends HttpError {
	constructor(status: number, body: unknown, headers: Headers, parseError?: unknown) {
		super(status, body, headers, parseError);
		this.name = "ServerError";
	}
}

export class NetworkError extends LolzteamError {
	readonly cause: unknown;

	constructor(cause: unknown) {
		const message = cause instanceof Error ? cause.message : "Network error";
		super(message);
		this.name = "NetworkError";
		this.cause = cause;
	}

	get isTransient(): boolean {
		if (!(this.cause instanceof Error)) {
			return false;
		}
		return this.cause.name === "TimeoutError" || this.cause.message === "fetch failed";
	}
}

export class ConfigError extends LolzteamError {
	constructor(message: string) {
		super(message);
		this.name = "ConfigError";
	}
}

export class RetryExhaustedError extends LolzteamError {
	readonly attempts: number;
	readonly lastError: unknown;

	constructor(attempts: number, lastError: unknown) {
		const message = lastError instanceof Error ? lastError.message : String(lastError);
		super(`Request failed after ${attempts} attempts: ${message}`);
		this.name = "RetryExhaustedError";
		this.attempts = attempts;
		this.lastError = lastError;
	}
}

export function createHttpError(
	status: number,
	body: unknown,
	headers: Headers,
	parseError?: unknown,
): HttpError {
	if (status === 429) {
		return new RateLimitError(body, headers, parseError);
	}
	if (status === 401 || status === 403) {
		return new AuthError(status, body, headers, parseError);
	}
	if (status === 404) {
		return new NotFoundError(body, headers, parseError);
	}
	if (status === 500 || status === 502 || status === 503 || status === 504) {
		return new ServerError(status, body, headers, parseError);
	}
	return new HttpError(status, body, headers, parseError);
}
