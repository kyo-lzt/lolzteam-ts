import { applyAuth } from "./auth.js";
import { ConfigError, LolzteamError, NetworkError, createHttpError } from "./errors.js";
import { createProxyDispatcher } from "./proxy.js";
import { RateLimiter } from "./rate-limiter.js";
import { withRetry } from "./retry.js";
import type { ClientConfig, RequestOptions, RetryConfig } from "./types.js";

function appendQueryValue(params: URLSearchParams, key: string, value: unknown): void {
	if (value === undefined || value === null) {
		return;
	}
	if (Array.isArray(value)) {
		for (const item of value) {
			appendQueryValue(params, key, item);
		}
		return;
	}
	if (typeof value === "boolean") {
		params.append(key, value ? "1" : "0");
		return;
	}
	params.append(key, String(value));
}

function buildQueryString(query: object): string {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(query)) {
		appendQueryValue(params, key, value);
	}
	return params.toString();
}

export class HttpClient {
	private readonly token: string;
	private readonly baseUrl: string;
	private readonly retryConfig: RetryConfig | false;
	private readonly timeout: number | undefined;
	private readonly rateLimiter: RateLimiter | undefined;
	private readonly searchRateLimiter: RateLimiter | undefined;
	private dispatcher: unknown | undefined;
	private dispatcherReady: Promise<void> | undefined;

	constructor(config: ClientConfig) {
		this.token = config.token;
		this.baseUrl = config.baseUrl.replace(/\/+$/, "");
		this.retryConfig = config.retry ?? {};
		this.timeout = config.timeout;

		if (config.rateLimit) {
			this.rateLimiter = new RateLimiter(config.rateLimit.requestsPerMinute);
		}

		if (config.searchRateLimit) {
			this.searchRateLimiter = new RateLimiter(config.searchRateLimit.requestsPerMinute);
		}

		if (config.proxy) {
			let parsed: URL;
			try {
				parsed = new URL(config.proxy.url);
			} catch {
				throw new ConfigError(`invalid proxy URL: ${config.proxy.url}`);
			}
			if (!["http:", "https:", "socks5:"].includes(parsed.protocol)) {
				throw new ConfigError(`unsupported proxy scheme: ${parsed.protocol.replace(":", "")}`);
			}
			if (!parsed.hostname) {
				throw new ConfigError("proxy URL has no host");
			}
			this.dispatcherReady = createProxyDispatcher(config.proxy.url).then((d) => {
				this.dispatcher = d;
			});
		}
	}

	async request<T = unknown>(options: RequestOptions): Promise<T> {
		if (this.rateLimiter) {
			await this.rateLimiter.acquire();
		}

		if (options.isSearch && this.searchRateLimiter) {
			await this.searchRateLimiter.acquire();
		}

		if (this.retryConfig === false) {
			return this.execute(options);
		}

		return withRetry(() => this.execute(options), this.retryConfig, {
			method: options.method,
			path: options.path,
		});
	}

	private async execute<T = unknown>(options: RequestOptions): Promise<T> {
		if (this.dispatcherReady) {
			await this.dispatcherReady;
		}

		let url = `${this.baseUrl}${options.path}`;
		if (options.query) {
			const qs = buildQueryString(options.query);
			if (qs) {
				url += `?${qs}`;
			}
		}

		let headers: Record<string, string> = { ...options.headers };
		headers = applyAuth(headers, this.token);

		let fetchBody: string | FormData | undefined;
		if (options.body && options.method !== "GET") {
			const encoding = options.bodyEncoding ?? "form";
			if (encoding === "multipart" && !Array.isArray(options.body)) {
				const formData = new FormData();
				for (const [key, value] of Object.entries(options.body)) {
					if (value !== undefined) {
						if (value instanceof Blob) {
							formData.append(key, value);
						} else {
							formData.append(key, String(value));
						}
					}
				}
				fetchBody = formData;
			} else if (encoding === "json") {
				headers["Content-Type"] = "application/json";
				fetchBody = JSON.stringify(options.body);
			} else if (!Array.isArray(options.body)) {
				headers["Content-Type"] = "application/x-www-form-urlencoded";
				const params = new URLSearchParams();
				for (const [key, value] of Object.entries(options.body)) {
					appendQueryValue(params, key, value);
				}
				fetchBody = params.toString();
			}
		}

		const fetchOptions: RequestInit & { dispatcher?: unknown } = {
			method: options.method,
			headers,
			body: fetchBody,
		};

		if (this.dispatcher) {
			fetchOptions.dispatcher = this.dispatcher;
		}

		if (this.timeout !== undefined) {
			fetchOptions.signal = AbortSignal.timeout(this.timeout);
		}

		let response: Response;
		try {
			response = await fetch(url, fetchOptions);
		} catch (error) {
			throw new NetworkError(error);
		}

		const body: T = await this.parseResponseBody(response);

		if (!response.ok) {
			throw createHttpError(response.status, body, response.headers);
		}

		if (body === null || body === undefined) {
			throw new LolzteamError(
				`Expected response body but got ${body === null ? "null" : "undefined"} (status ${response.status})`,
			);
		}

		return body;
	}

	/**
	 * Parse response body based on content type.
	 *
	 * Returns the Fetch API's native `response.json()` result, which is `Promise<any>`
	 * per the spec. This is the trust boundary between the external API and our typed
	 * code — the caller assigns the result to `T` without an explicit cast.
	 */
	private parseResponseBody(response: Response) {
		const contentType = response.headers.get("content-type") ?? "";
		if (contentType.includes("application/json")) {
			return response.json().catch(() => null);
		}
		return response.text();
	}
}
