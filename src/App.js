import React from 'react';
import './App.css';
import Board from './Components/Board';
import { createBoard, clearBoard } from './Engine';
function App() {
  var board = createBoard();
  return (
    <React.Fragment>
      <Board board={board} />
    </React.Fragment>
  );
}

export default App;
