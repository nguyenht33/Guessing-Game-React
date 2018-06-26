import React from 'react';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const userInput = parseInt(this.textInput.value, 10);
    if (userInput && this.props.onGuess) {
     this.props.onGuess(userInput);
    }
    this.textInput.value = '';
  }

  render() {
    return (
      <form className='addGuess' onSubmit={(e) => this.onSubmit(e)}>
        <input type='text' ref={input => this.textInput = input} id='userGuess' maxLength='3' placeholder='Enter your Guess' required />
        <input type='submit' id='guessButton' value='Guess'/>
      </form>
    )
  }
}
