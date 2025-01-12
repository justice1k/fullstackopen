const Header = ({name}) => {
    console.log(name)
    return <h1>{name}</h1>
  }
  
  const Total = (props) => {
    return <p>total of {props.sumOfExercises} exercises</p>
  }
  
  const Part = ({part, exercises}) => {
    return (
      <p>
        {part} {exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    console.log(parts)
    return (
      <>
        {parts.map(part => (
            <Part key={part.id} part={part.name} exercises={part.exercises} />
        ))}
      </>
    )
  }
  
  const Course = ({course}) => {
    
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts}/>
        <Total sumOfExercises={course.parts.reduce((accumlator, currentValue) => accumlator + currentValue.exercises, 0)} />
      </div>
    )
  }
  
export default Course