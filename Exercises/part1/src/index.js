import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const Statistic = ({ text, val }) => {
  return (
    <tr>
      <td><strong>{text}</strong></td>
      <td><strong>{val}</strong></td>
    </tr>
  )
}

const Statistics = ({ vals }) => {
  let sum = vals.reduce((a, b) => a + b);
  if (sum > 0) {
    let pos = vals[0] / (sum);
    let avg = (vals[0] - vals[2]) / sum;
    return (
      <table>
        <tbody>
          <Statistic text="good" val={vals[0]} />
          <Statistic text="neutral" val={vals[1]} />
          <Statistic text="bad" val={vals[2]} />
          <Statistic text="all" val={sum} />
          <Statistic text="average" val={avg.toFixed(1)} />
          <Statistic text="positive" val={(pos * 100).toFixed(1) + " %"} />
        </tbody>
      </table>
    )
  }
  return (
    <p>No feedback given</p>
  )

}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }
  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header text="statistics" />
      <Statistics vals={[good, neutral, bad]} />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));