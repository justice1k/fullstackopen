import { useState } from 'react'

const Header = ({title})  => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => {

  if (text === 'Positive') {
    return (
      <>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}%
        </td>
      </tr>
    </>
    )
  }
  return (
    <>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good/total) * 100

  if(total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
    <h2>Statistics</h2>
    <table>
    <StatisticsLine text={'Good'} value={good} />
    <StatisticsLine text={'Neutral'} value={neutral} />
    <StatisticsLine text={'Bad'} value={bad} />
    <StatisticsLine text={'All'} value={total} />
    <StatisticsLine text={'Average'} value={average} />
    <StatisticsLine text={'Positive'} value={positive} />
    </table>
  </div>
  )

}


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
    const updatedNeutralReview = neutral + 1

    setNeutral(updatedNeutralReview)
    console.log(neutral)
  }

  const handleBadClick = () => {
    const updatedBadReview = bad + 1

    setBad(updatedBadReview)
    console.log(bad)
  }



  



  return (
    <div>
    <Header title={'Give Feedback'} />
    <Button handleClick={handleGoodClick} text={'Good'} />
    <Button handleClick={handleNeutralClick} text={'Neutral'} />
    <Button handleClick={handleBadClick} text={'Bad'} />

    <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App