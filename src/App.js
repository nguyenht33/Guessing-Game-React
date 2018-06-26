import React from 'react';
import GameBoard from './GameBoard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: (Math.floor(Math.random()*100)+1),
      gameState: false
    }
  }

  newGame() {
    this.setState({ secretNumber: (Math.floor(Math.random()*100)+1) });
    this.setState({ gameState: false })
  }

  setGameState(gameState) {
    console.log(this.state.gameState);
    this.setState({ gameState: gameState })
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <input type='button' className='what' value='What?' />
            <input type='button' className='new' value='New Game' onClick={() => this.newGame(false)} />
          </nav>
          <h1>Hot or Cold</h1>
        </header>
        <GameBoard secretNumber={this.state.secretNumber} gameState={this.state.gameState} onGameStart={e => this.setGameState(e)} />
      </div>
    )
  }
}
