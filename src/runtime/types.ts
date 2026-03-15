export interface ClientConfig {
	token: string;
	baseUrl: string;
	proxy?: ProxyConfig;
	retry?: RetryConfig;
	rateLimit?: RateLimitConfig;
	searchRateLimit?: RateLimitConfig;
}

export interface ProxyConfig {
	url: string;
}

export interface RetryConfig {
	maxRetries?: number;
	baseDelay?: number;
	maxDelay?: number;
}

export interface RateLimitConfig {
	requestsPerMinute: number;
}

export interface RequestOptions {
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
	path: string;
	query?: object;
	body?: object | unknown[];
	headers?: Record<string, string>;
	bodyEncoding?: "form" | "json" | "multipart";
	isSearch?: boolean;
}
