// SPDX-License-Identifier:IGNORE SPDX WARNINGS
pragma solidity ^0.7.4;

contract Roulette {
    address payable public casinoWallet; // the casino wallet(cashier) the wallet that send the money for the winners
    uint public lastWinningNumber; // the last wining number -1 when the contract deployed first time
    uint public playerBet;

    
    //modify the pay function, that only the casinoWallet can pay to the winner or the losser give the money to the casinoWallet
    modifier onlyCasinoOwner(){
      require(msg.sender == casinoWallet);
      _;
    }

    constructor() { 
        casinoWallet = msg.sender;
        lastWinningNumber = 39;
    }
    
    function setBettingNumber(uint _betNumber) public {
        playerBet = _betNumber;
    }
    
    //this function will activate only by the player that lose in his bet
    function payTheCasino() payable public {
        casinoWallet.transfer(msg.value);
    }
    
    //this function will activate only by the casino wallet(the deployer of the contrat)
    function payTheWinner(address payable recipient) payable public onlyCasinoOwner{
      require(playerBet == lastWinningNumber);
      recipient.transfer(msg.value);
    }
 
    function spinTheRouelette() public{ 
      lastWinningNumber =  uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp))) % 37;
    }
}