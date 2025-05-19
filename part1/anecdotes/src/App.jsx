import { useState } from 'react'

const Anecdote = ({text}) => {
  return (
    <p>{text}</p>
  )
}

const NumberOfVotes = ({count}) => {
  return (
    <p>has {count} votes</p>
  )
}

const RandomAnecdote = ({text, count}) => {
  return (
    <div>
      <Anecdote text={text} />
      <NumberOfVotes count={count}/>      
    </div>
  )
}

const VoteButton = ({onClick}) => {
  return (
    <button onClick={onClick}>vote</button>
  )
}

const MoveButton = ({onClick}) => {
  return (
    <button onClick={onClick}>next anecdote</button>
  )
}

const Buttons = ({onClickVote, onClickNext}) => {
  return (
    <div>
      <VoteButton onClick={onClickVote} />
      <MoveButton onClick={onClickNext} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const copyVotes = [...votes]

  const handleClickOnNextAnecdote = () => {
    let randomInteger = selected;
    while (true) {
      randomInteger = generateRandomInteger();
      if (randomInteger != selected) break
    }
    setSelected(randomInteger);
  }

  const generateRandomInteger = () => {
    return Math.floor(Math.random() * anecdotes.length);
  }

  const handleClickOnVote = () => {
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const getHighestNumber = () => {
    return [...votes].sort((a, b) => b - a)[0]
  }

  const findMostVoted = () => {
    let index = votes.findIndex(elem => elem == getHighestNumber())

    if (index < 1) {
      return ""
    } else {
      return anecdotes[index]
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
        <RandomAnecdote text={anecdotes[selected]} count={votes[selected]} />
        <Buttons onClickVote={handleClickOnVote} onClickNext={handleClickOnNextAnecdote} />

      <h2>Anecdote with most votes</h2>
        <RandomAnecdote text={findMostVoted()} count={getHighestNumber()} />
    </>
  )
}

export default App
