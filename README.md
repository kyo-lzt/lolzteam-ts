# lolzteam-api

Fully typed TypeScript API wrapper for [Lolzteam](https://lolz.live) Forum and Market APIs.

**151 Forum endpoints + 115 Market endpoints** — all generated from the official OpenAPI schemas.

## Installation

```bash
npm install lolzteam-api
# or
bun add lolzteam-api
```

For proxy support, install `undici` as well:

```bash
npm install undici
```

## Quick Start

```ts
import { ForumClient, MarketClient } from "lolzteam-api";

// Forum
const forum = new ForumClient({ token: "your_token" });

const { threads } = await forum.threads.list({ forum_id: 876 });
await forum.threads.create({ forum_id: 876, title: "Hello", post_body: "World" });

// Market
const market = new MarketClient({ token: "your_token" });

const { items } = await market.category.steam({ pmin: 100, pmax: 500 });
const { item } = await market.managing.get(123456);
await market.purchasing.fastBuy(123456, { price: 200 });
```

Full autocomplete in your IDE — every method, every parameter, every response field is typed.

## Features

- **Fully typed** — generated request/response types from OpenAPI schemas
- **Browser + Node.js** — native `fetch`, works everywhere
- **Auto-retry** — 429 (respects `Retry-After`), 502, 503 with exponential backoff + jitter
- **Rate limiting** — built-in token bucket (Forum: 300 req/min, Market: 120 req/min)
- **Proxy support** — via `undici` ProxyAgent (HTTP/HTTPS/SOCKS)
- **File uploads** — `multipart/form-data` for avatar/background endpoints
- **Subpath imports** — `lolzteam-api/forum`, `lolzteam-api/market`

## Configuration

```ts
const market = new MarketClient({
  // Required
  token: "your_bearer_token",

  // Optional: custom base URL
  baseUrl: "https://api.lzt.market",

  // Optional: proxy
  proxy: { url: "http://user:pass@proxy:8080" },

  // Optional: retry config
  retry: {
    maxRetries: 3,     // default: 3
    baseDelay: 1000,   // default: 1000ms
    maxDelay: 30000,   // default: 30000ms
  },

  // Optional: rate limit override
  rateLimit: { requestsPerMinute: 60 },
});
```

## Error Handling

```ts
import { RateLimitError, AuthError, NotFoundError } from "lolzteam-api";

try {
  await market.managing.get(123);
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log(`Rate limited, retry after ${error.retryAfter}s`);
  } else if (error instanceof AuthError) {
    console.log("Invalid token");
  } else if (error instanceof NotFoundError) {
    console.log("Item not found");
  }
}
```

## API Groups

### ForumClient

| Group | Methods | Description |
|-------|---------|-------------|
| `forum.threads` | 22 | Threads CRUD, follow, bump, move |
| `forum.posts` | 15 | Posts CRUD, like, report |
| `forum.users` | 26 | Users, avatar/background upload, settings |
| `forum.conversations` | 23 | Private conversations |
| `forum.profilePosts` | 18 | Profile posts and comments |
| `forum.chatbox` | 12 | Chat messages |
| `forum.forums` | 9 | Forum listing, follow |
| `forum.search` | 7 | Search threads, posts, users |
| `forum.tags` | 4 | Content tags |
| `forum.notifications` | 3 | Notifications |
| `forum.categories` | 2 | Categories |
| `forum.forms` | 2 | Forms |
| `forum.links` | 2 | Link forums |
| `forum.pages` | 2 | Pages |
| `forum.assets` | 1 | CSS assets |
| `forum.batch` | 1 | Batch requests |
| `forum.navigation` | 1 | Navigation |
| `forum.oAuth` | 1 | OAuth token |

### MarketClient

| Group | Methods | Description |
|-------|---------|-------------|
| `market.managing` | 40 | Account management, edit, steam values |
| `market.category` | 28 | Category search (Steam, Fortnite, etc.) |
| `market.payments` | 12 | Payments, invoices, balance |
| `market.list` | 6 | User items, orders, favorites |
| `market.purchasing` | 5 | Buy, confirm, discount requests |
| `market.publishing` | 4 | Publish accounts for sale |
| `market.customDiscounts` | 4 | Custom discount management |
| `market.cart` | 3 | Shopping cart |
| `market.autoPayments` | 3 | Auto-payment setup |
| `market.profile` | 3 | User profile |
| `market.proxy` | 3 | Proxy management |
| `market.imap` | 2 | IMAP email management |
| `market.batch` | 1 | Batch requests |

## Code Generation

All client code and types are **generated from OpenAPI 3.1.0 schemas** — not written by hand.

```bash
bun run codegen
```

This reads `schemas/forum.json` and `schemas/market.json`, resolves all `$ref` pointers, and emits typed TypeScript files. Generated code is committed to the repo — no codegen step needed at install time.

### Where types are generated

| What | Where |
|------|-------|
| Generator source | `codegen/src/` |
| Forum types | `src/generated/forum/types.ts` |
| Market types | `src/generated/market/types.ts` |
| Forum API groups | `src/generated/forum/*.ts` (18 files) |
| Market API groups | `src/generated/market/*.ts` (14 files) |

## Project Structure

```
lolzteam-ts/
  schemas/              OpenAPI 3.1.0 specs (forum.json, market.json)
  codegen/src/          Code generator (reads OpenAPI -> emits TS code)
  src/runtime/          HTTP client, retry, rate limiter, proxy, auth, errors
  src/generated/        Generated clients and types (committed to repo)
  tests/
```

## Development

```bash
bun install              # Install dependencies
bun run codegen          # Regenerate clients from OpenAPI schemas
bun run typecheck        # Type check (tsc --noEmit)
bun run lint             # Lint + format (Biome)
bun test                 # Run tests
bun run build            # Build to dist/
```

## License

MIT
