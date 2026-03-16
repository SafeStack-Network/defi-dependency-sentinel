# 📋 Project Issues & Bounties (Drips Wave 2026)

This document outlines the initial set of issues available for contributors. Once the project is approved for the Drips Wave program, these will be converted into proper GitHub Issues.

Points are awarded based on the difficulty tier, as defined in `CONTRIBUTING.md`.

## 🟢 Trivial (100 pts)
Good first issues to get familiar with the repo structure.

- **[API] Setup basic health check coverage:** Ensure all Hono API endpoints have proper health check monitoring (`/health`).
- **[Frontend] Add Error Boundaries:** Implement React error boundaries in the Next.js App Router for the dashboard.
- **[Watcher] Structured Logging:** Update the Rust watcher to use the `tracing` crate instead of `println!`.
- **[Docs] API Documentation:** Add Swagger/OpenAPI spec generation for the Hono API.

## 🟡 Medium (150 pts)
Issues requiring a solid understanding of a single specific framework within the monorepo.

- **[Frontend] Implement Web3 Login:** Connect `wagmi` and `viem` to the Next.js dashboard to allow users to authenticate with their wallets.
- **[Watcher] OSV.dev Fetching Loop:** Implement the actual HTTP fetching logic to the OSV API using the established Tokio worker pool.
- **[Contracts] Soroban Test Suite:** Write the base `cargo` tests for the `DripsSentinel` contract to verify owner unlocking modifiers.
- **[API] Dashboard Mock Data:** Replace the hardcoded `api/inventory` mock data with an in-memory SQLite (or Prisma stub) implementation.

## 🔴 High (200 pts)
Complex issues that bridge multiple layers of the monorepo or require deep domain knowledge.

- **[Watcher] Risk Score Implementation:** Implement the core Risk-to-Drip math: `(CVSS * TVL_Exposure) / Current_Drip_Rate` in Rust to calculate active threat levels.
- **[API] Drips SDK Integration:** Fully implement the `/api/drips/split` endpoint using the native JavaScript `@drips/sdk` to execute driver functions.
- **[Contracts] Drips v2 IDriver Connection:** Update the `DripsSentinel` Soroban contract to correctly structure cross-contract calls and route funds.
- **[Watcher] GitHub Advisory Verification:** Implement logic to query the GitHub Advisory API to cross-verify OSV data.
