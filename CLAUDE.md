# lolzteam-api-ts

API wrapper for Lolzteam Forum (151 endpoints) and Market (115 endpoints).

## Project structure

```
schemas/          — OpenAPI 3.1.0 specs (forum.json, market.json)
codegen/src/      — Code generator (reads OpenAPI → emits TS client code)
src/runtime/      — HTTP client, retry, rate limiter, proxy, auth, errors
src/generated/    — Generated clients and types (committed to repo)
tests/            — Tests
```

## Key commands

- `bun install` — install deps
- `bun run codegen` — regenerate clients from OpenAPI schemas
- `bun run typecheck` — type check (tsc --noEmit)
- `bun run lint` — lint + format fix (biome)
- `bun run lint:check` — lint check only
- `bun test` — run tests
- `bun run build` — compile to dist/

## Architecture

- **Two separate clients**: `ForumClient` and `MarketClient` (different baseUrl, rate limits)
- **DX pattern**: `client.threads.list()`, `client.managing.get(id)` — methods grouped by API tags
- **Codegen**: Bun script reads OpenAPI JSON, resolves $refs, groups by tags, emits typed methods
- **Runtime**: native fetch (browser + Node.js), undici ProxyAgent for proxy (optional peer dep)
- **Generated code is committed** — no codegen needed at install/CI time

## API details

- **Auth**: Bearer token only (both Forum and Market)
- **Forum**: base URL `https://api.lolz.live`, rate limit 300 req/min
- **Market**: base URL `https://api.lzt.market`, rate limit 120 req/min (search: 20 req/min)
- **Retry**: 429 (Retry-After), 502, 503 — exponential backoff + jitter
- **Parameters**: snake_case preserved (1:1 with API)
- **operationId format**: `Tag.Method` (e.g. `Users.SA.Reset`, `Category.All`)

## Conventions

- ESM only, strict tsconfig, `noUncheckedIndexedAccess`, `verbatimModuleSyntax`
- Tabs, double quotes, semicolons, trailing commas (biome)
- No `any`, no `!`, no `as Type` — real types only
- Custom error hierarchy: `LolzteamError` → `HttpError` / `NetworkError`
- Package exports: `.` (all), `./forum`, `./market`
