import React, {useState, useEffect} from 'react';
import '../App.css';


const BoardSquare = ({element, winNum, setClick}) => {
  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [foreColor, setForeColor] = useState('');

  useEffect(() => {
    setColor(element.color);
    setNumber(element.number);
    setForeColor(element.foreColor);
    // console.log(`element.number: ${number}, ${foreColor}`);
  },[winNum, foreColor]);

  return (
    <div className="boardSquare" style={{backgroundColor: `${color}`, color: `${foreColor}`}}
      onClick={() => setClick(element.number)}>
        <p id='number'>{number}</p>
    </div>
  );
}

export default BoardSquare;
