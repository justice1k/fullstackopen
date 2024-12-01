const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {

  const name = 'Justice'
  const age = 20
  return (
    <div>
      <p>Greetings</p>
      <Hello name='George' age={22 + 10} />
      <Hello name={name}  age={age} />
      <Hello />

    </div>
  )
}

export default App