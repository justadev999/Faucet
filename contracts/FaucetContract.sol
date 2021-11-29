// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./IFaucet.sol";

contract FaucetContract is IFacuet {
    uint256 public numOfFAunders;

    mapping(address => bool) private funders;
    mapping(uint256 => address) private lutFunders;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier OnlyOwner() {
        require(msg.sender == owner, "Nope, you're not ETH TO'S CEO!!!!!");
        _;
    }

    function transferThePower(address newOwner) public OnlyOwner {
        owner = newOwner;
    }

    modifier LimitWithdraw(uint256 withdrawAmount) {
        require(withdrawAmount < 1000000000000000000, "Nope, too much bro");
        _;
    }

    //DEPOSIT
    function addFunds() public payable override {
        address funder = msg.sender;

        if (!funders[funder]) {
            uint256 index = numOfFAunders++;
            funders[funder] = true;
            lutFunders[index] = funder;
        }
    }

    //WITHDRAW
    function withdraw(uint256 withdrawAmount)
        external
        override
        LimitWithdraw(withdrawAmount)
    {
        payable(msg.sender).transfer(withdrawAmount);
    }

    // function getAllFunders() internal view returns (address[] memory) {
    //     return funders;
    // }
    function getAllFunders() external view returns (address[] memory) {
        address[] memory _funders = new address[](numOfFAunders);

        for (uint256 i = 0; i < numOfFAunders; i++) {
            _funders[i] = lutFunders[i];
        }
        return _funders;
    }

    function getFunderAtIndex(uint8 index) external view returns (address) {
        return lutFunders[index];
    }

    receive() external payable {}
}

// let instance = await FaucetContract.deployed();
// instance.addFunds({from:accounts[0], value:"1000000000000000000"})
// instance.addFunds({from:accounts[1], value:"1000000000000000000"})
// instance.addFunds({from:accounts[2], value:"1000000000000000000"})
// instance.getFunderAtIndex(1);
// instance.withdraw("5000000000000000000", {from: accounts[1]})
