# 🛡️ Project Sentinel: Memory Context & Mission Brief

## 1. Project Vision
**Sentinel Protocol** is an open-source security infrastructure tool for the **Drips Network (v2)**. It bridges the gap between **Software Supply Chain Security** and **Sustainable Open Source Funding**. 

The goal is to monitor DeFi dependencies for vulnerabilities and automatically route "Security Drips" to maintainers to incentivize proactive patching.

## 2. Drips Wave Context (2026)
- **Role:** Maintainer of the SafeStack-Network Organization.
- **Goal:** Participate in the next Drips Wave Program (e.g., Stellar or Ethereum Infrastructure).
- **Core Requirement:** Use the Drips SDK to create "Drip Lists" that reward "invisible" dependency maintainers.
- **Contributor Tiers:** - Trivial: 100 pts
  - Medium: 150 pts
  - High: 200 pts

## 3. Technical Architecture
### A. Monorepo Structure (pnpm + Turborepo)
- `/apps/watcher`: **Rust (Tokio + Axum)**. The "Intelligence Layer." Scans repos, queries OSV.dev/GitHub Advisory, and calculates Risk Scores.
- `/apps/api`: **Node.js (Hono/TypeScript)**. The "Communication Layer." Interfaces with Drips SDK and serves the dashboard.
- `/apps/dashboard`: **Next.js 15 (App Router)**. The "Interface Layer." DAO treasury risk management.
- `/packages/contracts`: **Solidity (Foundry)**. `DripsSentinel.sol` for "Security Split" logic and bounty buffers.

### B. Core Logic & Formulas
The Watcher must calculate a **Risk-to-Drip Score**:
$$Risk = \frac{CVSS \times TVL\_Exposure}{Current\_Drip\_Rate}$$

## 4. Immediate Agent Tasks
1. **Scaffold:** Execute the monorepo structure with pnpm, Turborepo, and Foundry.
2. **Rust Setup:** Initialize the `/apps/watcher` with `alloy-rs`, `tokio`, `serde`, and `axum`.
3. **Smart Contracts:** Scaffold a contract that implements the Drips v2 `IDriver` interface.
4. **CI/CD:** Setup GitHub Actions for **Slither** and **Cargo Audit**.

## 5. Security Principles
- **Self-Scanning:** Sentinel must pass its own scans. Use OpenSSF Scorecards.
- **Immutable Triggers:** Financial streams (Drips) should be verifiable by on-chain events (e.g., a merged PR addressing a CVE).

---
**Context End:** Use this file as the primary constraint for all code generation and architectural planning.
