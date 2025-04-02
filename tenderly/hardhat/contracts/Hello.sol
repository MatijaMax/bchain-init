// SPDX-License-Identifier: MIT
pragma solidity >=0.8.26 <0.9.0;

contract HelloWorld {
    string public message;


    constructor() {
        message = "Hello, World!";
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
