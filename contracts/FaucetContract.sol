// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FaucetContract {
    
    address[] internal funders;

    function addFunds() public payable {
        funders.push(msg.sender);
    }

    function getAllFunders() internal view returns (address[] memory) {
        return funders;
    }

    function getFunderAtIndex(uint8 index) internal view returns(address) {
        address[] memory _funders = getAllFunders();
        return _funders[index];
    }


receive() external payable{}
}


// let instance = await FaucetContract.deployed();
// instance.addFunds({from:accounts[0], value:"2"})