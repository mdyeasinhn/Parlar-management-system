# AGENTS.md

## Monorepo structure

- `client/` — Next.js 16.2.9 (App Router), React 19, Tailwind CSS v4, next-auth
- `server/` — Express + Mongoose + JWT, TypeScript, Zod validation

No root workspace config. Each package has its own `package.json`, `tsconfig.json`, `eslint.config.mjs`, and `.env`.

## Client (`client/`)

### Commands (run from `client/`)
- `npm run dev` — dev server on `:3000`
- `npm run build` — production build
- `npm start` — start production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`)

### Key details
- Path alias: `@/*` -> `src/*`
- Font: Poppins (via next/font/google), applied globally in `layout.tsx`
- Auth: next-auth with GitHub + Google providers (configured in `src/utils/authOptions.ts`)
- CSS: Tailwind v4 with `@tailwindcss/postcss` (PostCSS config only has that plugin)
- API routes: only `api/auth/[...nextauth]` exists
- No tests configured
- Client env requires `GITHUB_ID`, `GITHUB_SECRET`, `GOOGLE_ID`, `GOOGLE_SECRET`, `NEXTAUTH_SECRET`
- Existing `client/AGENTS.md` warns: this is NOT the Next.js you know — read `node_modules/next/dist/docs/` before writing code, heed deprecation notices

## Server (`server/`)

### Commands (run from `server/`)
- `npm run dev` — `ts-node-dev --respawn --transpile-only src/server.ts` (nodemon-like hot reload, `:5000`)
- `npm run lint` — ESLint on `src/`
- `npm run lint:fix` — auto-fix
- `npm run format` — Prettier (write mode)


### Key details
- Entrypoint: `src/server.ts` -> connects to MongoDB, starts Express on `PORT` (default 5000)
- App setup: `src/app.ts` — CORS, cookie-parser, JSON parser, routes at `/api`
- Routes: `/api/users`, `/api/auth`, `/api/service`, `/api/review`, `/api/admin`, `/api/category`
- **Missing module**: `routes/index.ts` imports `categoryRoutes` from `../module/category/category.route`, but `src/module/category/` does not exist — will crash at runtime
- Module pattern: each feature in `src/module/<name>/` has route, controller, service, model, interface, validation files
- Auth middleware (`src/middleware/auth.ts`): reads JWT from `Authorization` header, verifies role
- Prettier config: `{ semi: false, singleQuote: true, tabWidth: 2, trailingComma: "es5" }`
- Server env requires `PORT`, `DATABASE_URL` (MongoDB), `BYCRPT_SOLT_ROUNDS`, `JWT_ACCESS_SECRET`, `JWT_EXPIRES_IN`
  - Note: env var is `BYCRPT_SOLT_ROUNDS` (typo preserved from codebase), `JWT_ACCESS_SECRET` is empty in `.env`
- Docker: `Dockerfile` (Node 20, exposes 5000, runs `npm run dev`)

## General


- No shared tooling between client and server — each is fully independent
- No root-level `package.json`, `tsconfig.json`, or lint config
- No tests exist in either package
- No CI workflows (no `.github/workflows/`)
- Both packages have `.env` files committed (with real/expired credentials) — do not commit secrets under `client/.gitignore` pattern `.env*`
