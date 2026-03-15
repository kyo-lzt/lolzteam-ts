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
		const firstError = extractFirstError(body);
		super(firstError ? `HTTP ${status}: ${firstError}` : `HTTP ${status}`);
		this.name = "HttpError";
		this.status = status;
		this.body = body;
		this.headers = headers;
		this.parseError = parseError;
	}

	/** Typed access to the `errors` array from the API response body. */
	get errors(): string[] {
		if (
			typeof this.body === "object" &&
			this.body !== null &&
			"errors" in this.body &&
			Array.isArray(this.body.errors)
		) {
			return this.body.errors.filter((e): e is string => typeof e === "string");
		}
		return [];
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

const TRANSIENT_ERROR_CODES = new Set([
	"ECONNREFUSED",
	"ECONNRESET",
	"EPIPE",
	"ETIMEDOUT",
	"ENOTFOUND",
	"EAI_AGAIN",
	"UND_ERR_SOCKET",
	"UND_ERR_CONNECT_TIMEOUT",
]);

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
		if (this.cause.name === "TimeoutError") {
			return true;
		}
		const code: unknown = "code" in this.cause ? this.cause.code : undefined;
		if (typeof code === "string") {
			return TRANSIENT_ERROR_CODES.has(code);
		}
		return this.cause.message === "fetch failed";
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

export class ValidationError extends LolzteamError {
	readonly field: string;
	readonly value: unknown;

	constructor(field: string, value: unknown, allowed: readonly string[]) {
		super(
			`Invalid value ${JSON.stringify(value)} for field "${field}". Allowed: ${allowed.join(", ")}`,
		);
		this.name = "ValidationError";
		this.field = field;
		this.value = value;
	}
}

function extractFirstError(body: unknown): string | undefined {
	if (typeof body === "object" && body !== null && "errors" in body && Array.isArray(body.errors)) {
		const first = body.errors.find((e): e is string => typeof e === "string");
		return first;
	}
	return undefined;
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
