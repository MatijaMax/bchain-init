import { ethers } from "hardhat";
import { Contract } from "ethers";
import { tenderly } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with account: ${deployer.address}`);

  const Drill = await ethers.getContractFactory("Drill");
  const contract = await Drill.deploy();

  const address = await contract.getAddress();
  console.log("Manual Simple: {Drill} deployed to:", address);

  await tenderly.verify({
  address,
  name: "Drill",
  });


}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
