import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import spin_bottun from './images/spin_botton.gif'
import Ethereum_logo from './images/ethreum logo.png';


const Roullete = () => {
  const [winNum, setWinNumber] = useState();
  const [chosenNumber, setChosenNumber] = useState();
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
      <h1>Ethereum <img src={Ethereum_logo} id='ether-logo'/> Roulette</h1>
      <Table winNum={winNum} setNumberIsPick={setNumberIsPick}
        chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}
      />
      <div className='roulette-game'>
        {numberIsPicked ? <h3>Your number is: <i style={{fontStyle: 'normal', color: 'blue'}}>{chosenNumber}</i></h3>: 
          <h4>Please choose a number ...</h4>}
        <img src={spin_bottun} alt="spinButton" onClick={spinTheRoulette}/>
        <h3 id='win-number'>Last wining number: <i style={{fontStyle: 'normal', color: 'yellow'}}>{winNum}</i></h3>
      </div>
    </div>
  );
}

export default Roullete;





