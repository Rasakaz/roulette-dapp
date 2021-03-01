import { useEffect, useState } from 'react';
import './App.css';
import web3 from './components/web3'; 
import {ROULETTE_CONTRACT_ADDRESS, ROULETTE_ABI} from './components/config';
import Table from './components/Table';
import spin_bottun from './images/spin_botton.gif'
import Ethereum_logo from './images/ethreum logo.png';


const Roullete = () => {
  const [Roulette_Contract, setRouletteContract] = useState({});
  const [playerWallet, setPlayerWallet] = useState("");
  const [casinoWalletAddr, setCasinoWalletAddr] = useState("");
  const [winNum, setWinNumber] = useState();
  const [chosenNumber, setChosenNumber] = useState();
  const [numberIsPicked, setNumberIsPick] = useState(false);

   

  useEffect(() => {
    const loadContractAndInit = async () => {
      setPlayerWallet(`${await web3.eth.getAccounts()}`); // set the player wallet address
      //load the contract
      const r = new web3.eth.Contract(ROULETTE_ABI, ROULETTE_CONTRACT_ADDRESS);
      //initialize all the state variables by the contract state variables
      setRouletteContract(r);
      setCasinoWalletAddr(await r.methods.casinoWallet().call());
      setWinNumber(await r.methods.lastWinningNumber().call())
      setCasinoWalletAddr(`${await r.methods.casinoWallet().call()}`);
    }
    loadContractAndInit();
  }, [])

  
  const spinTheRoulette = async () => {
    //check if chosen number is true
      //true - set the number to the contract
    if(numberIsPicked) {
      await Roulette_Contract.methods.setBettingNumber(chosenNumber).send({
        from: playerWallet
      });
      //spin the roulette  
      await Roulette_Contract.methods.spinTheRouelette().send({from: playerWallet});
      setWinNumber(await Roulette_Contract.methods.lastWinningNumber().call());
      //check if the number win
        //true pay to the winner
      if(winNum == chosenNumber){
        window.alert(`Congratulations!
        In this moments the casino make a transaction to your wallet! thanks for play Ethereum Roulette.
        want to make another spin?`);
        try {
          await Roulette_Contract.methods.payTheWinner().send({
            from: playerWallet,
            to: casinoWalletAddr,
            value: web3.utils.toWei('15', 'ether')
          });
        } catch(err) {
          console.error(err);
        }
      } else {
        window.alert(`You loss! thanks for play Ethereum Roulette.
        want to make another spin?`);
      }
    }
  }

  return (
    <div className="roullete">
      <h1>Ethereum <img src={Ethereum_logo} id='ether-logo' alt=""/> Roulette</h1>
      <Table winNum={winNum} setNumberIsPick={setNumberIsPick}
        chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}
      />
      <div className='roulette-game'>
        {numberIsPicked ? <h3>Your number is: <i style={{fontStyle: 'normal', color: 'blue'}}>{chosenNumber}</i></h3>: 
          <h4>Please choose a number ...</h4>}
        <img src={spin_bottun} alt="spinButton" onClick={spinTheRoulette}/>
        {winNum === 39 ? <h3 id='win-number'>Last wining number: </h3>:
        <h3 id='win-number'>Last wining number: <i style={{fontStyle: 'normal', color: 'yellow'}}>{winNum}</i></h3>}
      </div>
    </div>
  );
}

export default Roullete;





