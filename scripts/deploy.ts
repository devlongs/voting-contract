import { ethers } from "hardhat";

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy([
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  ]);

  await voting.deployed();

  console.log(`Voting contract is deployed to this address: ${voting.address}`); //0x345e9E5fCA43dE0892d7D85260F82Aa6B6951143
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
