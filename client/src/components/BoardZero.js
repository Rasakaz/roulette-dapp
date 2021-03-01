import React, {useState, useEffect} from 'react';
import '../App.css';


const BoardZero = ({c, num, winNum, setNumberIsPick, setChosenNumber, chosenNumber}) => {
  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [foreColor, setForeColor] = useState('');

  useEffect(() => {
    setColor(c);
    setNumber(num);
    setForeColor(winNum === num ? 'yellow': chosenNumber === num ? 'blue': 'white');
  }, [winNum, chosenNumber]);

  const numberClicked = () => {
    setChosenNumber(number);
    setNumberIsPick(true);
  }

  return (
    <div className="boardZero" style={{backgroundColor: `${color}`, color: `${foreColor}`}}
      onClick={numberClicked}>
        <p id='number' >{number}</p>
    </div>
  );
}

export default BoardZero;
