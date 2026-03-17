# Contributing to Sentinel Protocol

Welcome to the Sentinel Protocol! We are excited to have you contribute to the future of open-source sustainability.

By contributing to this repository, you may be eligible to earn points based on the complexity and impact of your PRs:

- **Trivial:** 100 pts (e.g., documentation typos, simple formatting)
- **Medium:** 150 pts (e.g., bug fixes, adding new API endpoints, basic UI components)
- **High:** 200 pts (e.g., core logic updates, Rust Watcher performance improvements, Smart Contract features)

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make sure you follow the atomic commit rules (see below).
4. Submit a Pull Request with a clear description of the changes.

## Development Setup

The project is a pnpm monorepo.

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Build all packages:
   ```bash
   pnpm build
   ```

## Code Quality Rules

We adhere strictly to our atomic commit and production-grade quality rules. Please review the following before submitting a PR:

- **Atomic Commits:** Each commit should address exactly one logical change.
- **Commit Messages:** Use clear, descriptive commit messages (e.g., `feat: add user authentication`).
- **Clean History:** Avoid pushing "WIP" commits. Squash before merging.

Thank you for helping secure the DeFi dependency stack!
