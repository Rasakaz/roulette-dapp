import React, {useState, useEffect} from 'react';
import '../App.css';


const BoardSquare = ({c, num, winNum, setNumberIsPick, chosenNumber, setChosenNumber}) => {
  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [foreColor, setForeColor] = useState('');
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    setColor(c);
    setNumber(num);
    setForeColor(winNum === num ? 'yellow': chosenNumber === num ? 'blue': 'white');
  },[winNum, chosenNumber]);

  const numberClicked = () => {
    setChosenNumber(number);
    setNumberIsPick(true);
  }

  return (
    <div className="boardSquare" style={{backgroundColor: `${color}`, color: `${foreColor}`}}
      onClick={numberClicked}>
        <p id='number'>{number}</p>
    </div>
  );
}

export default BoardSquare;
