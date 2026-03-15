export interface ClientConfig {
	token: string;
	baseUrl: string;
	proxy?: ProxyConfig;
	retry?: RetryConfig;
	rateLimit?: RateLimitConfig;
	searchRateLimit?: RateLimitConfig;
	timeout?: number;
	onRetry?: (info: RetryInfo) => void;
}

export interface ProxyConfig {
	url: string;
}

export interface RetryInfo {
	attempt: number;
	delay: number;
	error: unknown;
	method: string;
	path: string;
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
