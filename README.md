# sethacked-blockchain-erp

A JSON-first, hybrid on-chain/off-chain ERP protocol designed to be fully open-source. Anyone can spin up a local instance (via Hardhat or Anvil) or deploy to a public EVM network. Off-chain data lives in AWS (S3/Aurora/Lambda), and on-chain anchors (hashes, events, workflows) live in Solidity contracts.

---

## 📦 Tech Stack

* **Blockchain**:

  * Solidity (v0.8.18)
  * Hardhat (JS ecosystem)
  * Ethers.js
* **Off-Chain**:

  * AWS S3 (JSON object storage)
  * AWS Aurora (PostgreSQL + JSONB)
  * AWS Lambda (Node.js API layer)
* **Frontend**: Plain HTML, CSS, and vanilla JS (Ethers.js)
* **Testing & Tooling**:

  * Mocha & Chai
  * dotenv

---

## 📁 Repository Layout

```
├── contracts/              # Solidity sources
├── schema/                 # JSON-Schema definitions
├── lib/                    # JS helper libraries
├── scripts/                # Deploy & utility scripts
├── test/                   # Mocha/Chai tests
├── deployments/            # Contract ABIs & deployed addresses
├── init-erp-project.sh     # Bootstrap script
├── hardhat.config.js       # Hardhat configuration
└── README.md               # You are here
```

---

## 🔧 Prerequisites

* **Node.js** v16+ & **npm** v8+
* **Git**
* **AWS CLI** configured (with permissions for S3 & Aurora)

---

## 🚀 Setup

1. **Clone & enter directory**

   ```bash
   git clone <your-repo-url> sethacked-blockchain-erp
   cd sethacked-blockchain-erp
   ```

2. **Bootstrap the project**

   ```bash
   chmod +x init-erp-project.sh
   ./init-erp-project.sh
   ```

3. **Configure environment (optional)**

   The local Hardhat network works without any configuration. If you later
   want to deploy to a testnet, create a `.env` file with `RPC_URL` and
   `PRIVATE_KEY` variables.

4. **Install AWS SDK** (for your off-chain scripts)

   ```bash
   npm install aws-sdk
   ```

---

## 📖 Common Commands

* **Compile contracts**

  ```bash
  npx hardhat compile
  ```

* **Run tests**

  ```bash
  npx hardhat test
  ```

* **Start local node**

  ```bash
  npx hardhat node
  ```

* **Deploy to local**

  ```bash
  npx hardhat run scripts/deploy.js --network localhost
  ```


---

## 🚧 Protocol & SaaS Model

**Open-Source Protocol:**
This repository serves as the reference implementation of the ERP protocol under the **MIT License**. It includes:

* JSON-Schema definitions for key records
* Solidity contracts implementing core anchoring logic
* JavaScript helper libraries for hashing, schema validation, and on-chain interactions

**Hosted SaaS:**
We operate a hosted SaaS based on this protocol. While the protocol core is MIT open-source, the hosted service offers:

* Multi-tenancy and automated upgrades
* Premium modules and reporting dashboards
* SLA-backed support and custom integrations

---

## 🏷 Versioning & Governance

* We follow [SemVer](https://semver.org/) for all releases (`vX.Y.Z`) and maintain a `CHANGELOG.md`.
* Contributors are welcome via Issues and PRs. As the project maintainer, I retain commit rights, following a benevolent dictator model.

---

## 🌐 Publishing & Ecosystem

* JSON-Schema packages are published to npm under `@sethacked/erp-schema`.
* Contract ABIs and reference addresses (for public testnets) are available in the `deployments/` folder.
* Future plans include publishing an OpenAPI spec for off-chain APIs.

---

## 🎯 Next Steps

1. **DocumentRegistry contract** → `contracts/DocumentRegistry.sol`
2. **Deployment script** → `scripts/deploy.js`
3. **Unit tests** → `test/DocumentRegistry.test.js`
4. **Off-chain anchor script** → upload JSON to S3 & call smart contract
5. **Minimal frontend** → form to submit JSON & verify on-chain via Ethers.js

---

## 🤝 Contributing

Contributions welcome! Please open an issue or pull request with any ideas, bugs, or improvements.

---

## 📜 License

This repository is licensed under the **MIT License** (see `LICENSE` file). The open-source protocol core is MIT; the hosted SaaS may include proprietary modules under a separate commercial agreement.
