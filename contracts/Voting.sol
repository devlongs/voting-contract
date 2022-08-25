// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Voting {

    mapping(address => uint256) public votesReceived;

  
    address[] public candidateList;

    constructor(address[] memory candidateNames) {
        candidateList = candidateNames;
    }

    function totalVotesFor(address candidate) public view returns (uint256) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }


    function voteForCandidate(address candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate] += 1;
    }

    function validCandidate(address candidate) public view returns (bool) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }

    function viewAllCandidates() public view returns(address[] memory){
      return candidateList;
    }
}
