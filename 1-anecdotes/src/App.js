import React, { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Display = (props) => {
  return <div>{props.text}</div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })
  const [max, setMax] = useState([0, 0])

  const setSelectedTo = (newValue) => setSelected(newValue)
  const setVotesTo = () => {
    if (votes[selected] + 1 > max[1]) {
      setMax([selected, votes[selected] + 1])
    }
    setVotes({ ...votes, [selected]: (votes[selected] += 1) })
  }

  // let maxArr = Object.values(votes)
  // let max = Math.max(...maxArr)

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Display text={anecdotes[selected]} />
      <Display text={'has ' + votes[selected] + ' votes'} />
      <Button handleClick={() => setVotesTo()} text='vote' />
      <Button
        handleClick={() =>
          setSelectedTo(Math.floor(Math.random() * anecdotes.length))
        }
        text='next anecdote'
      />
      <Header text='Anecdote with the most votes' />
      <Display text={anecdotes[max[0]]} />
      <Display text={'has ' + max[1] + ' votes'} />
    </div>
  )
}

export default App
