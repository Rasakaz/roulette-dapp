pragma solidity ^0.7.4;

contract Player {
  address payable public playerWallet; // check if this is has to be payable
  uint public number; // the number that bet on

  constructor()  {
    playerWallet = msg.sender;

  }

  //we use view only if the function will not change any of the contract values
  function getNumber() public view return (uint){
    return number;
  }

  function setNumber(uint num) public {
    number = num;
  }

}