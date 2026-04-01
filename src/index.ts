// Clients
export { ForumClient } from "./generated/forum/index.js";
export { MarketClient } from "./generated/market/index.js";

// Runtime — errors
export {
	LolzteamError,
	HttpError,
	RateLimitError,
	AuthError,
	ForbiddenError,
	NotFoundError,
	ServerError,
	NetworkError,
	RetryExhaustedError,
	ValidationError,
	ConfigError,
	createHttpError,
} from "./runtime/index.js";

// Runtime — utilities
export {
	withRetry,
	RateLimiter,
	applyAuth,
	createProxyFetch,
	HttpClient,
} from "./runtime/index.js";

// Runtime — config types
export type {
	ClientConfig,
	ProxyConfig,
	ProxyFetch,
	RetryConfig,
	RetryInfo,
	RateLimitConfig,
	RequestOptions,
} from "./runtime/index.js";

// Generated types
export type * as ForumTypes from "./generated/forum/types.js";
export type * as MarketTypes from "./generated/market/types.js";
