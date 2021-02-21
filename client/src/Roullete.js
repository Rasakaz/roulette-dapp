import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import spin_bottun from './images/spin_botton.gif'
import Ethereum_logo from './images/ethreum logo.png';


const Roullete = () => {
  const [winNum, setWinNumber] = useState();
  const [numberPicked, setNumberPick] = useState();
  const [numberIsPicked, setNumberIsPick] = useState(false);

  useEffect(() => {
    setWinNumber(0);//here we need to make a call to blockchain to get the last win number
  }, [])

  const spinTheRoulette = () => {
    console.log('roulette spining.....');
    setWinNumber(Math.floor(Math.random() * 37)); //here we need to make a call to the blockchain to get the number
  }

  return (
    <div className="roullete">
      <h1>Ethereum <img src={Ethereum_logo} /> Roulette</h1>
      <Table winNum={winNum} setNumberPick={setNumberPick} 
        setNumberIsPick={setNumberIsPick}
      />
      <div className='roulette-game'>
        {numberIsPicked ? <h4>Your number is: {numberPicked}</h4>: 
          <h4>Please choose a number</h4>}
        <img src={spin_bottun} alt="spinButton" onClick={spinTheRoulette}/>
        <h3>Last wining number: {winNum}</h3>
      </div>
    </div>
  );
}

export default Roullete;
