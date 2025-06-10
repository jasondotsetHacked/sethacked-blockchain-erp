require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    // Built-in Hardhat Network: auto-mines on every tx
    hardhat: {
      // you can tweak forking here if you want:
      // forking: { url: process.env.MAINNET_RPC_URL, blockNumber: 17300000 }
    },
    // A localhost alias in case you `npx hardhat node`
    localhost: {
      url: "http://127.0.0.1:8545",
      // accounts are unlocked by default
    },
  },
  paths: {
    sources: "contracts",
    tests: "test",
    cache: "cache",
    artifacts: "artifacts",
  },
  mocha: {
    timeout: 20000, // if you have long‐running tests
  },
};
