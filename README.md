# lolzteam-ts

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/kyo-lzt/lolzteam-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/kyo-lzt/lolzteam-ts/actions)

TypeScript API wrapper for the [Lolzteam](https://lolz.live) Forum and Market APIs. **266 endpoints** (151 Forum + 115 Market), auto-generated from OpenAPI specifications.

## Features

- **Complete API coverage** -- 266 endpoints across Forum and Market clients
- **Auto-generated** -- clients and types generated from OpenAPI 3.1.0 specs, always in sync
- **Fully async** -- every method returns a `Promise`
- **Proxy support** -- HTTP, HTTPS, and SOCKS5 via `undici` ProxyAgent
- **Retry logic** -- exponential backoff with jitter, respects `Retry-After` headers
- **Rate limiting** -- token bucket algorithm, queue-based (no dropped requests)
- **Works everywhere** -- Node.js and browser environments
- **Zero required dependencies** -- `undici` is optional, needed only for proxy
- **Strict TypeScript** -- no `any`, no type casts, no non-null assertions

## Quick Start

```bash
npm install lolzteam-api
# or
bun add lolzteam-api
```

If you need proxy support:

```bash
npm install undici
```

## Usage

```typescript
import { ForumClient, MarketClient } from "lolzteam-api";

const forum = new ForumClient({ token: "your_token" });
const market = new MarketClient({ token: "your_token" });

// Forum API
const categories = await forum.categories.list();
const threads = await forum.threads.list({ forumId: 876 });
const user = await forum.users.get({ userId: 1 });

// Market API
const items = await market.category.all({ page: 1 });
const steam = await market.category.steam({ noVac: true });
const account = await market.list.get({ itemId: 123456 });
```

Forum API groups: `oAuth`, `assets`, `categories`, `forums`, `links`, `pages`, `navigation`, `threads`, `posts`, `users`, `profilePosts`, `conversations`, `notifications`, `tags`, `search`, `batch`, `chatbox`, `forms`.

Market API groups: `category`, `list`, `managing`, `profile`, `cart`, `purchasing`, `customDiscounts`, `publishing`, `payments`, `autoPayments`, `proxy`, `imap`, `batch`.

## Configuration

```typescript
const client = new ForumClient({
  token: "your_token",

  // Base URL (optional, defaults differ per client)
  // Forum: "https://prod-api.lolz.live"
  // Market: "https://prod-api.lzt.market"
  baseUrl: "https://prod-api.lolz.live",

  // Proxy (requires undici)
  proxy: { url: "http://user:pass@127.0.0.1:8080" },

  // Retry settings
  retry: {
    maxRetries: 5,       // default: 3
    baseDelay: 1000,     // default: 1000ms
    maxDelay: 30000,     // default: 30000ms
  },

  // Rate limiting
  rateLimit: {
    requestsPerMinute: 200,  // default: 300 (Forum), 120 (Market)
  },

  // Separate rate limit for search endpoints
  searchRateLimit: {
    requestsPerMinute: 30,   // default: 20 (Market)
  },

  // Request timeout in milliseconds
  timeout: 15000,

  // Callback on each retry attempt
  onRetry: (info) => {
    console.log(`Retry #${info.attempt} for ${info.method} ${info.path} in ${info.delay}ms`);
  },
});
```

## Retry Logic

Failed requests are retried automatically for transient errors. The delay uses exponential backoff with jitter. `Retry-After` header on 429 responses is respected.

| Status | Retried | Behavior |
|--------|---------|----------|
| 429 | Yes | Uses `Retry-After` header if present |
| 502, 503, 504 | Yes | Exponential backoff with jitter |
| Network errors | Yes | Timeout and connection errors |
| 401, 403 | No | Thrown immediately |
| 404 | No | Thrown immediately |
| Other | No | Thrown immediately |

Delay formula: `min(baseDelay * 2^attempt + random(0, baseDelay), maxDelay)`

```typescript
// Disable retry
const client = new ForumClient({ token: "..." }); // retry is undefined = disabled

// Enable retry with onRetry callback
const client = new ForumClient({
  token: "...",
  retry: { maxRetries: 3, baseDelay: 1000, maxDelay: 30000 },
  onRetry: (info) => console.log(`Retry #${info.attempt}`),
});
```

## Proxy

Requires the `undici` package. HTTP, HTTPS, and SOCKS5 protocols are supported.

```typescript
// HTTP proxy
const client = new ForumClient({
  token: "your_token",
  proxy: { url: "http://127.0.0.1:8080" },
});

// Authenticated proxy
const client2 = new ForumClient({
  token: "your_token",
  proxy: { url: "http://user:pass@proxy.example.com:3128" },
});

// SOCKS5 proxy
const client3 = new ForumClient({
  token: "your_token",
  proxy: { url: "socks5://127.0.0.1:1080" },
});
```

Proxy is not available in browser environments. Attempting to use it will throw a `ConfigError`.

## Error Handling

All errors extend `LolzteamError`. HTTP errors include status code, response body, and headers.

```typescript
import { ForumClient, RateLimitError, AuthError, NotFoundError, NetworkError } from "lolzteam-api";

try {
  const user = await forum.users.get({ userId: 1 });
} catch (error) {
  if (error instanceof AuthError) {
    console.error("Invalid or expired token");
  } else if (error instanceof NotFoundError) {
    console.error("User not found");
  } else if (error instanceof RateLimitError) {
    console.error("Rate limited, retry after:", error.retryAfter);
  } else if (error instanceof NetworkError) {
    console.error("Network failure:", error.cause);
  }
}
```

Error hierarchy:

```
LolzteamError
├── HttpError
│   ├── RateLimitError    (429)
│   ├── AuthError         (401, 403)
│   ├── NotFoundError     (404)
│   └── ServerError       (500, 502, 503)
├── NetworkError
└── ConfigError
```

## Rate Limits

The built-in rate limiter uses a token bucket algorithm. When the bucket is empty, requests are queued until tokens refill -- no requests are dropped.

| Client | Default limit |
|--------|---------------|
| Forum  | 300 req/min   |
| Market | 120 req/min   |
| Market (search) | 20 req/min |

```typescript
const client = new MarketClient({
  token: "...",
  searchRateLimit: { requestsPerMinute: 30 },
});
```

## Code Generation

Clients and types are auto-generated from OpenAPI 3.1.0 specs in `schemas/`:

```bash
bun run codegen
```

| Input | Output |
|-------|--------|
| `schemas/forum.json` | `src/generated/forum/index.ts`, `src/generated/forum/types.ts` |
| `schemas/market.json` | `src/generated/market/index.ts`, `src/generated/market/types.ts` |

Generator source is in `codegen/src/`.

## Project Structure

```
schemas/                    OpenAPI 3.1.0 specifications
codegen/src/                Code generator
src/
  index.ts                  Package entry point (re-exports)
  runtime/
    http-client.ts          HTTP client (fetch-based)
    retry.ts                Retry logic (exponential backoff + jitter)
    rate-limiter.ts         Token bucket rate limiter
    proxy.ts                Proxy dispatcher (undici)
    auth.ts                 Authentication header
    errors.ts               Error class hierarchy
    types.ts                Configuration types
  generated/
    forum/
      index.ts              ForumClient (18 API groups, 151 methods)
      types.ts              Forum request/response types
    market/
      index.ts              MarketClient (13 API groups, 115 methods)
      types.ts              Market request/response types
tests/
dist/                       Compiled output
```

## Commands

```bash
bun install          # Install dependencies
bun run codegen      # Generate clients from OpenAPI specs
bun run build        # Compile TypeScript to dist/
bun run typecheck    # Type check (tsc --noEmit)
bun run lint         # Lint and format (Biome, auto-fix)
bun run lint:check   # Check lint without fixing
bun test             # Run tests
```

## License

[MIT](LICENSE)
