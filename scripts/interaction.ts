import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO GOERLI TESTNET: 0x345e9E5fCA43dE0892d7D85260F82Aa6B6951143

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = Voting.attach(
    "0x345e9E5fCA43dE0892d7D85260F82Aa6B6951143"
  );

  
  const candidates = await voting.viewAllCandidates();
  console.log("Candidate List: ", candidates);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});