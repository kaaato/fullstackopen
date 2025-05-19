import { useState } from 'react'

const TableHead = ({text}) => {
  return (
    <th>{text}</th>
  )
}

const TableData = ({value}) => {
  return (
    <td>{value}</td>
  )
}

const TableRow = ({text, value}) => {
  // console.log(text, value)
  return (
    <tr>
      <TableHead text={text} />
      <TableData value={value}/>
    </tr>
  )
}

const Button = ({states, text}) => {
  // console.log(states, text)
  const {state, setState} = states
  const handleClick = () => {
    setState(state + 1)
  }
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Feedback = ({states}) => {
  // console.log(states)
  const [good, neutral, bad] = states
  return (
    <div>
      <Button states={good} text="good" />
      <Button states={neutral} text="neutral" />
      <Button states={bad} text="bad" />
    </div>
  )
}

const Table = ({states}) => {
  // console.log(states)
  const [good, neutral, bad] = states;
  const sumOfClicks = good.state + neutral.state + bad.state
  const positive = (sumOfClicks === 0) ? 0 : good.state / sumOfClicks * 100 + " %"
  const average = (sumOfClicks === 0) ? 0 : (good.state - bad.state) / sumOfClicks

  if (sumOfClicks === 0) {
    return (
      <p>NO feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <TableRow text="good" value={good.state} />
        <TableRow text="neutral" value={neutral.state} />
        <TableRow text="bad" value={bad.state} />
        <TableRow text="all" value={sumOfClicks} />
        <TableRow text="average" value={average} />
        <TableRow text="positive" value={positive} />        
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const states = [
    {
      state: good, setState: setGood,
    },
    {
      state: neutral, setState: setNeutral,
    },
    {
      state: bad, setState: setBad,
    }
  ]

  return (
    <>
      <h1>give feedback</h1>
      <Feedback states={states} />
      <h2>statistics</h2>
      <Table states={states} />
    </>
  )
}

export default App
