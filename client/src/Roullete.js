import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import spin_bottun from './images/spin_botton.gif'


const Roullete = () => {
  const[winNum, setWinNumber] = useState();

  useEffect(() => {
    setWinNumber(0);//here we need to make a call to blockchain to get the last win number
  }, [])

  const spinTheRoulette = () => {
    console.log('roulette spining.....');
    setWinNumber(Math.floor(Math.random() * 37)); //here we need to make a call to the blockchain to get the number
    // setWinNumber(0);
    // console.log(`number win: ${winNum}`);
  }

  return (
    <div className="roullete">
      <Table winNum={winNum}/>
      <img src={spin_bottun} alt="spinButton" onClick={spinTheRoulette}/>
    </div>
  );
}

export default Roullete;
