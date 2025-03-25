import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={() => onClick((prev) => prev + 1)}>
    {text}
  </button>
)

const StatisticsLine = ({ text , feel}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{feel}</td>
    </tr>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />
      <h1>Statistics</h1>
      {all === 0 
      ? "No feedback Given" 
      : (
        <table>
          <tbody>
            <StatisticsLine text="good" feel={good} />
            <StatisticsLine text="neutral" feel={neutral} />
            <StatisticsLine text="bad" feel={bad} />
            <StatisticsLine text="all" feel={all} />
            <StatisticsLine text="average" feel={average} />
            <StatisticsLine text="positive" feel={(good / all) * 100 +"%"} />
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App