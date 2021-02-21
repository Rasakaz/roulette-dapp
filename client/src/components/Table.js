import '../App.css';
import Board from './Board';

function Table({winNum, setNumberIsPick, chosenNumber, setChosenNumber}) {
  return (
    <div className="table">
      <Board winNum={winNum} setNumberIsPick={setNumberIsPick} 
      chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
    </div>
  );
}

export default Table;
