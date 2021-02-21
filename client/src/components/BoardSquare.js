import React, {useState, useEffect} from 'react';
import '../App.css';


const BoardSquare = ({c, num, winNum, chosenNumber, setChosenNumber}) => {
  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [foreColor, setForeColor] = useState('');

  useEffect(() => {
    setColor(c);
    setNumber(num);
    setForeColor(winNum === num ? 'yellow': 'white');
  },[winNum]);

  return (
    <div className="boardSquare" style={{backgroundColor: `${color}`, color: `${foreColor}`}}
      onClick={() => setChosenNumber(num)}>
        <p id='number'>{number}</p>
    </div>
  );
}

export default BoardSquare;
