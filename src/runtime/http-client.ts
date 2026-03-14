import { applyAuth } from "./auth.js";
import { LolzteamError, NetworkError, createHttpError } from "./errors.js";
import { createProxyDispatcher } from "./proxy.js";
import { RateLimiter } from "./rate-limiter.js";
import { withRetry } from "./retry.js";
import type { ClientConfig, RequestOptions, RetryConfig } from "./types.js";

const DEFAULT_BASE_URL = "https://api.zelenka.guru";

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
	private readonly retryConfig: RetryConfig;
	private readonly rateLimiter: RateLimiter | undefined;
	private dispatcher: unknown | undefined;
	private dispatcherReady: Promise<void> | undefined;

	constructor(config: ClientConfig) {
		this.token = config.token;
		this.baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
		this.retryConfig = config.retry ?? {};

		if (config.rateLimit) {
			this.rateLimiter = new RateLimiter(config.rateLimit.requestsPerMinute);
		}

		if (config.proxy) {
			this.dispatcherReady = createProxyDispatcher(config.proxy.url).then((d) => {
				this.dispatcher = d;
			});
		}
	}

	async request<T = unknown>(options: RequestOptions): Promise<T> {
		if (this.rateLimiter) {
			await this.rateLimiter.acquire();
		}

		return withRetry(() => this.execute<T>(options), this.retryConfig);
	}

	private async execute<T>(options: RequestOptions): Promise<T> {
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
			if (options.multipart && !Array.isArray(options.body)) {
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
			} else {
				headers["Content-Type"] = "application/json";
				fetchBody = JSON.stringify(options.body);
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

		let response: Response;
		try {
			response = await fetch(url, fetchOptions);
		} catch (error) {
			throw new NetworkError(error);
		}

		const contentType = response.headers.get("content-type") ?? "";
		const isJson = contentType.includes("application/json");

		let body: unknown;
		if (isJson) {
			try {
				body = await response.json();
			} catch {
				body = null;
			}
		} else {
			body = await response.text();
		}

		if (!response.ok) {
			throw createHttpError(response.status, body, response.headers);
		}

		if (body === null || body === undefined) {
			throw new LolzteamError(
				`Expected response body but got ${body === null ? "null" : "undefined"} (status ${response.status})`,
			);
		}

		return body as T;
	}
}
