pragma solidity ^0.7.4;

contract Roulette {
    address public casinoWallet; // the casino wallet(cashier) the wallet that send the money for the winners
    uint public lastWinningNumber; // the last wining numbrt
    address payable Player[] public players; // all the roueltte players that bet
    uint public betsAmount; //amount of bets/plays on the rouelette
    
    constructor() { 
        casinoWallet = msg.sender;
    }
    
    function enter() public payable {
        // require is a global function.
        // if require is passed in a falsie value then the function will automatically exit.
        // need to add: require(msg.value = ticketPrice);
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function getLastWiningNumber() public view returns (uint) {
        return lastWinningNumber;
    }
    
    function spinTheRouelette() private view returns (uint) { 
        return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,players)));
    }
    
    function payTheWinners() public restricted {

      for(uint i = 0; i < betsAmount; i++){
        if(playes[i].getNumber == lastWinningNumber){
          players[i].transfer()
        }
      }
        /*
        // Assures us that the number will be in the range of the indexes of the players in the array.
        uint index = random() % players.length;
        // Transfer the amount to the winner.
        players[index].transfer(address(this).balance);
        lastWinner = players[index];
        // We want to create a dynamic array with initial size of 0.
        // So that the lottery will be held over and over.
        players = new address payable[](0);
        */
    }
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    // return the players
    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
    
    // this function is automatically genereted when we declering an array
    //function getPlayerAtIndex(uint index) public view returns(address player) {
      //  return players[index];
    //}
}