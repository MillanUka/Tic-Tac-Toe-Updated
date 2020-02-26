import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
import {createBoard} from './Engine';
function App() {
  var board = createBoard();
  return (
      <Board board={board}/>
  );
}

export default App;
