import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
import * as dotenv from "dotenv";
tenderly.setup({ automaticVerifications: true });
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    virtual_mainnet: {
      //url: process.env.TENDERLY_VIRTUAL_MAINNET_RPC!, 
      url: process.env.API_URL,
      chainId: 1,
    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "project",
    username: "MaxPaw",
    privateVerification: true,
  },
};

export default config;
