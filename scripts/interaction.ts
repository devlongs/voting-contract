import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO GOERLI TESTNET: 0x58659688bdF1c45fE0e78a11ff77b0d318C1b5c5

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = Voting.attach(
    ""
  );

  
  const todoItem = await voting.getTodoItem(0);
  console.log("Todo Item: ", todoItem);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});