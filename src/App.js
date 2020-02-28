import React from 'react';
import './App.css';
import Board from './Components/Board';
import { createBoard } from './Engine';
function App() {
  var board = createBoard();
  return (
    <React.Fragment >
      <br />
      <Board board={board} className={"content"}/>
      <footer>Made my <a href={"https://github.com/MillanUka"}>Millan Uka</a>. <a href={"https://github.com/MillanUka/Tic-Tac-Toe-Updated/blob/master/LICENSE"}>MIT License</a></footer>
    </React.Fragment>
  );
}

export default App;
