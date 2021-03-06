import React from 'react';

export default function GuessList(props) {
  const list = props.guesses.map((guess, index ) =>
    <li key={index}>
      {guess}
    </li>
  )

  return (
    <ul id='guessList' className='guessBox'>
      {list}
    </ul>
  )
}
