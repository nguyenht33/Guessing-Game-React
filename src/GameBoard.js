import React from 'react';
import GuessForm from './GuessForm';
import GuessFeedback from './GuessFeedback';
import GuessCount from './GuessCount';
import GuessList from './GuessList';

const initialState = {
  userGuess: '',
  guesses: [],
  feedback: 'Make your Guess!'
};

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleGuess(userGuess) {
    let feedback;
    const secretNumber = this.props.secretNumber;
    if (secretNumber === userGuess) {
      feedback = 'You Won. Click new game to play again';
    } else if(Math.abs(secretNumber - userGuess) < 10){
		  feedback = 'hot';
  	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
  		feedback = ' Kinda hot';
  	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
  		feedback = 'less than warm';
  	} else {
  		feedback = 'cold';
  	}
    this.props.onGameStart(true);
    this.setState({ userGuess });
    this.setState({ guesses: [...this.state.guesses, userGuess] })
    this.setState({ feedback })
  }

  render() {
    return (
      <section>
          <GuessFeedback feedback={this.state.feedback} />
          <GuessForm onGuess={userGuess => this.handleGuess(userGuess)} />
          <GuessCount count={this.state.guesses.length} />
          <GuessList guesses={this.state.guesses} />
      </section>
    )
  }
}
