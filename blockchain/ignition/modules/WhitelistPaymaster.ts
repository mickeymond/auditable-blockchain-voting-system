import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WhitelistPaymasterModule = buildModule("WhitelistPaymasterModule", (m) => {
  const whitelistPaymaster = m.contract("WhitelistPaymaster");

  return { whitelistPaymaster };
});

export default WhitelistPaymasterModule;
