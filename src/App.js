import React from 'react';
import './App.css';
import Board from './Components/Board';
import { createBoard, clearBoard } from './Engine';
function App() {
  var board = createBoard();
  return (
    <React.Fragment className={"content"}>
      <Board board={board} />
      <footer>Made my <a href={"https://github.com/MillanUka"}>Millan Uka</a></footer>
    </React.Fragment>
  );
}

export default App;
