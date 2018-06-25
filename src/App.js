import React from 'react';
import GameBoard from './GameBoard';

export default function App(props) {
  return (
    <div>
      <header>
        <nav>New Game</nav>
        <h1>Hot or Cold</h1>
      </header>
      <GameBoard />
    </div>
  )
}
