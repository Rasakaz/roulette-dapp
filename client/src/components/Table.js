import '../App.css';
import Board from './Board';

function Table({winNum}) {
  return (
    <div className="table">
      <Board winNum={winNum}/>
    </div>
  );
}

export default Table;
