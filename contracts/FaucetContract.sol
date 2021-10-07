// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FaucetContract {
    
    address[] public funders;

    function addFunds() external payable {
        funders.push(msg.sender);
    }

receive() external payable{}
}