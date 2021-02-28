// SPDX-License-Identifier:IGNORE SPDX WARNINGS
pragma solidity ^0.7.4;

contract Player {
  address payable public playerWallet; // check if this is has to be payable
  uint public number; // the number that bet on (uint cannot be negative... if we want to use negative numbers we use type int)

  // constuctor will activate when the contract deployed to the blockchain
  constructor(address payable _address)  {
    playerWallet = _address;
  }

  function win (uint _amount) public {
    
  }

  //we use view only if the function will not change any of the contract values
  function getNumber() public view returns (uint){
    return number;
  }

  function setNumber(uint num) public {
    number = num;
  }

}