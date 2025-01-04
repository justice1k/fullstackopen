import { useState } from 'react'

const Header = ({title})  => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Stats = () => {
  return (
    <div>
      <h1>Statistics</h1>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)

  // handle click events
  const handleGoodClick = () => {
    const updatedGoodReview = good + 1
    const updatedAverage = average + 1

    setGood(updatedGoodReview)
    setAverage(updatedAverage)
    console.log(good)
    console.log(average)
  }

  const handleNeutralClick = () => {
    const updatedNeutralReview = neutral + 1

    setNeutral(updatedNeutralReview)
    console.log(neutral)
  }

  const handleBadClick = () => {
    const updatedBadReview = bad + 1
    const updatedAverage = average - 1

    setBad(updatedBadReview)
    setAverage(updatedAverage)
    console.log(bad)
  }



  



  return (
    <div>
    <Header title={'Give Feedback'} />
    <Button handleClick={handleGoodClick} text={'Good'} />
    <Button handleClick={handleNeutralClick} text={'Neutral'} />
    <Button handleClick={handleBadClick} text={'Bad'} />

    <div>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {(average / (good + neutral + bad))}</p>
    </div>

    </div>
  )
}

export default App