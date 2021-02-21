import { useEffect, useState } from 'react';
import '../App.css';
import BoardSquare from './BoardSquare';
import BoardZero from './BoardZero';

/* Setting up the roulette numbers sequence */
const sequence = [0, 32 ,15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23,
  10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
const boardNumbers = Array.from(sequence, (value, index) => {
  return {number: value, 
    color: index === 0 ? 'green': index % 2 === 0 ? 'black': 'red', 
    foreColor: 'white'};
});
boardNumbers.sort((el1, el2) => el1.number < el2.number ? -1: 1);
for(var i = 1; i <= 34; i += 3){
  const tmp = boardNumbers[i];
  boardNumbers[i] = boardNumbers[i + 2];
  boardNumbers[i + 2] = tmp;
}

function Board({winNum, setNumberIsPick, chosenNumber, setChosenNumber}) {
  
  const [squares, setSquares] = useState([]);


  useEffect(() => {
    setSquares(boardNumbers);
  }, []);
  
  
  return (
    <div className='board-all'>
      <BoardZero  key={boardNumbers[0].number}  c={boardNumbers[0].color} num={boardNumbers[0].number} 
      winNum={winNum} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} 
      setNumberIsPick={setNumberIsPick}
      />
      <div className="board">
        {squares.map(element => {
          return element.number !== 0 ? <BoardSquare key={element.number} 
          c={element.color} num={element.number} 
          winNum={winNum} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}
          setNumberIsPick={setNumberIsPick}
          />: null;
        })}   
      </div>
    </div>
  );
}

export default Board;












// console.log(winNum);
// element.number === click && element.number === winNum ? element.foreColor = '#E70887': 
// element.number === winNum ? element.foreColor = 'yellow':
// element.number === click ? element.foreColor = 'blue': element.foreColor = 'white';
// // console.log(`element.number: ${element.number}, ${element.foreColor}`);
// if(element.number === click && element.number === winNum){
//   element.foreColor = '#E70887';
// } else if(element.number === winNum) {
//   element.foreColor = 'yellow';
// } else if(element.number === click) {
//   element.foreColor = 'blue';
// } else {
//   element.foreColor = 'white';
// }