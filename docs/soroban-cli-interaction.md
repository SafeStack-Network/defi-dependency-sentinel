# Soroban CLI Interaction for Automated Bounties

## Overview
This watcher module interacts with the Soroban CLI to automate bounty operations on the Stellar network.

## Architecture
```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
│ Bounty       │───>│ Soroban CLI  │───>│ Stellar       │
│ Watcher      │    │ Wrapper      │    │ Network       │
└─────────────┘    └──────────────┘    └──────────────┘
       │                   │
       v                   v
┌─────────────┐    ┌──────────────┐
│ Event        │    │ Transaction  │
│ Processor    │    │ Signer       │
└─────────────┘    └──────────────┘
```

## CLI Commands Used

### Deploy Bounty Contract
```bash
soroban contract deploy   --wasm target/wasm32-unknown-unknown/release/bounty.wasm   --source <ADMIN_SECRET>   --network testnet
```

### Create Bounty
```bash
soroban contract invoke   --id <CONTRACT_ID>   --source <ADMIN_SECRET>   -- create_bounty   --amount 1000000   --token <TOKEN_ADDRESS>   --deadline 1716163200
```

### Submit Claim
```bash
soroban contract invoke   --id <CONTRACT_ID>   --source <CLAIMANT_SECRET>   -- submit_claim   --bounty_id 1   --evidence "ipfs://Qm..."
```

## Automation Script
```python
import subprocess
import json
from typing import Optional

class SorobanCLI:
    def __init__(self, network: str = "testnet", source: Optional[str] = None):
        self.network = network
        self.source = source

    def invoke(self, contract_id: str, method: str, args: list = None) -> dict:
        cmd = [
            "soroban", "contract", "invoke",
            "--id", contract_id,
            "--network", self.network,
        ]
        if self.source:
            cmd += ["--source", self.source]
        cmd += [f"--{method}"]
        if args:
            cmd.extend(args)
        result = subprocess.run(cmd, capture_output=True, text=True)
        return json.loads(result.stdout) if result.returncode == 0 else {"error": result.stderr}
```

## Error Handling
- CLI timeout: 30 seconds
- Retry on network errors: 3 attempts
- Log all transactions for audit
