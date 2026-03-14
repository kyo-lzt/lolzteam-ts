# lolzteam-ts

TypeScript API wrapper for Lolzteam Forum and Market. Clients and types are generated from OpenAPI specs.

## Requirements

- [Bun](https://bun.sh/) 1.1+

## Setup

```bash
git clone https://github.com/kyo-lzt/lolzteam-ts.git
cd lolzteam-ts
bun install
```

## Code Generation

```bash
bun run codegen
```

Reads schemas from `schemas/forum.json` and `schemas/market.json`, generates typed clients into:

| What | Where |
|------|-------|
| Forum types | `src/generated/forum/types.ts` |
| Market types | `src/generated/market/types.ts` |
| Forum client | `src/generated/forum/index.ts` |
| Market client | `src/generated/market/index.ts` |

Generator source — `codegen/src/`.

## Project Structure

```
schemas/          — OpenAPI 3.1.0 specs
codegen/src/      — Code generator
src/runtime/      — HTTP client, retry, rate limiter, proxy, errors
src/generated/    — Generated code (committed to repo)
```

## Commands

```bash
bun install          # Install dependencies
bun run codegen      # Generate clients from schemas
bun run typecheck    # Type check (tsc --noEmit)
bun run lint         # Lint + format (Biome)
bun run lint:check   # Check lint without fixing
bun test             # Tests
bun run build        # Build to dist/
```

## License

MIT
