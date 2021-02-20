import React, {useState, useEffect} from 'react';
import '../App.css';


const BoardZero = ({element, winNum}) => {
  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [foreColor, setForeColor] = useState('');

  useEffect(() => {
    // console.log(element);
    setColor(element.color);
    setNumber(element.number);
    setForeColor(element.foreColor);
  }, [winNum]);

  return (
    <div className="boardZero" style={{backgroundColor: `${color}`, color: `${foreColor}`}}>
        <p id='number' >{number}</p>
    </div>
  );
}

export default BoardZero;
