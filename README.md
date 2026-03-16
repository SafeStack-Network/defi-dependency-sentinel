# 🛡️ Sentinel Protocol
> **Automating DeFi Supply Chain Security via Decentralized Funding**

DeFi is a stack of dependencies. When a library fails, the protocol fails. Sentinel monitors your GitHub dependencies for vulnerabilities and automatically routes funding to the maintainers of your most critical, under-funded libraries.

In 2026, DeFi security is only as strong as its weakest dependency. Sentinel Protocol transforms passive software maintenance into a proactive security asset. By integrating real-time vulnerability telemetry with Drips v2, we provide protocols with an automated 'Financial Firewall' that ensures the maintainers of critical, deep-stack libraries are compensated for every patch and security audit. Our mission is to eliminate 'Maintenance Debt' and secure the invisible foundations of the decentralized economy.

### 🚀 Features
- **Risk-to-Funding Formulas:** Automated funding suggestions based on CVE data.
- **Sentinel Dashboard:** Real-time security health for DAO treasuries.
- **Emergency Triggers:** Automated bounty streams for critical security patches.

## 🛠 Getting Started

This project is structured as a `pnpm` workspace powered by Turborepo.

### Prerequisites

- **Node.js** (v18+)
- **pnpm** (v9+)
- **Rust** & Cargo (`rustup` recommended)
- **Stellar CLI** (`cargo install --locked stellar-cli`)

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SafeStack-Network/defi-dependency-sentinel
   cd defi-dependency-sentinel
   ```

2. **Install all workspace dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development servers (Dashboard & API):**
   ```bash
   pnpm dev
   ```
   - Dashboard: `http://localhost:3000`
   - API: `http://localhost:3001`

4. **Run the Rust Watcher Service:**
   ```bash
   cd apps/watcher
   cargo run
   ```

5. **Build/Test Smart Contracts:**
   ```bash
   cd packages/contracts
   stellar contract build
   cargo test
   ```

### 🤝 Contributing

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed point breakdowns.
