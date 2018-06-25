import React from 'react';

export default class GameBoard extends React.Component {
  render() {
    return <section>
              <h2 id='feedback'>Make your Guess!</h2>
              <form>
                <input type='text' id='userGuess' className='text' name='userGuess' maxLength='3' placeholder='Enter your Guess' required />
                <input type='button' id='guessButton' className='button' name='submit' value='Guess'/>
              </form>
              <p>
                Guess #
                <span id='count'>0</span>
                !
              </p>
              <ul id='guessList' class='guessBox'>
                <li>2</li>
              </ul>
           </section>
  }
}
