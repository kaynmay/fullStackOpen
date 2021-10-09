import React, { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const values = props.good * 1 + props.neutral * 0 + props.bad * -1

  if (total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={values / total} />
        <StatisticLine
          text='positive'
          value={(props.good / total) * 100 + ' %'}
        />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodTo = (newValue) => setGood(newValue)
  const setNeutralTo = (newValue) => setNeutral(newValue)
  const setBadTo = (newValue) => setBad(newValue)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGoodTo(good + 1)} text='good' />
      <Button handleClick={() => setNeutralTo(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBadTo(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
