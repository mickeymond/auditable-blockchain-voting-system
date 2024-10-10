import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  gasReporter: {
    enabled: true
  },
  networks: {
    mainnet: {
      url: `https://ethereum-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    linea_mainnet: {
      url: `https://rpc.linea.build/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    scroll_mainnet: {
      url: `https://rpc.scroll.io/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    sepolia: {
      url: `https://ethereum-sepolia-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    linea_sepolia: {
      url: `https://rpc.sepolia.linea.build/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    scroll_sepolia: {
      url: `https://sepolia-rpc.scroll.io/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    holesky: {
      url: `https://ethereum-holesky-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  }
};

export default config;
