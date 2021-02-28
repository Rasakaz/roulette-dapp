import { useEffect, useState } from 'react';
import './App.css';
import web3 from './components/web3'; 
import {ROULETTE_CONTRACT_ADDRESS, ROULETTE_ABI} from './components/config';
import Table from './components/Table';
import spin_bottun from './images/spin_botton.gif'
import Ethereum_logo from './images/ethreum logo.png';


const Roullete = () => {
  const [Roulette_Contract, setRouletteContract] = useState();
  const [casinoWalletAddr, setCasinoWalletAddr] = useState("");
  const [winNum, setWinNumber] = useState();
  const [chosenNumber, setChosenNumber] = useState();
  const [numberIsPicked, setNumberIsPick] = useState(false);

   

  useEffect(() => {
    setWinNumber(0);//here we need to make a call to blockchain to get the last win number
    const init = async () => {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts); // the user that enter the casino
      //load the contract
      const r = new web3.eth.Contract(ROULETTE_ABI, ROULETTE_CONTRACT_ADDRESS);
      setRouletteContract({r});
      setCasinoWalletAddr(await r.methods.casinoWallet().call());
      setWinNumber(await r.methods.lastWinningNumber().call())
      // setCasinoWalletAddr(`${await r.methods.casinoWallet()}`);
      const a = await r.casinoWallet;
      console.log(r);
      console.log(a);
    }
    init();
  }, [])

  const spinTheRoulette = () => {
    console.log('roulette spining.....');
    setWinNumber(Math.floor(Math.random() * 37)); //here we need to make a call to the blockchain to get the number
  }

  return (
    <div className="roullete">
      <h1>Ethereum <img src={Ethereum_logo} id='ether-logo'/> Roulette</h1>
      <Table winNum={winNum} setNumberIsPick={setNumberIsPick}
        chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}
      />
      <div className='roulette-game'>
        {numberIsPicked ? <h3>Your number is: <i style={{fontStyle: 'normal', color: 'blue'}}>{chosenNumber}</i></h3>: 
          <h4>Please choose a number ...</h4>}
        <img src={spin_bottun} alt="spinButton" onClick={spinTheRoulette}/>
        {winNum == 39 ? <h3 id='win-number'>Last wining number: </h3>:
        <h3 id='win-number'>Last wining number: <i style={{fontStyle: 'normal', color: 'yellow'}}>{winNum}</i></h3>}
      </div>
    </div>
  );
}

export default Roullete;





