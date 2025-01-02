import { useState } from 'react'

const Header = ({title})  => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handle click events
  const handleGoodClick = () => {
    const updatedGoodReview = good + 1

    setGood(updatedGoodReview)
    console.log(good)
  }

  const handleNeutralClick = () => {
    const updatedNeutralReview = good + 1

    setNeutral(updatedNeutralReview)
    console.log(neutral)
  }

  const handleBadClick = () => {
    const updatedBadReview = good + 1

    setBad(updatedBadReview)
    console.log(bad)
  }



  return (
    <div>
    <Header title={'Give Feedback'} />
    <Button handleClick={handleGoodClick} text={'Good'} />
    <Button handleClick={handleNeutralClick} text={'Neutral'} />
    <Button handleClick={handleBadClick} text={'Bad'} />

    </div>
  )
}

export default App