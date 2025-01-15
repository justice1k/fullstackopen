import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()

    const ifExists = persons.find(person => person.name === newName)

    if(ifExists != undefined){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
    } else if(newName === ""){
      alert("Please enter a name to add to phonebook")
    }else{
      const newContact = {
        name: newName
      }
      setPersons(persons.concat(newContact))
      setNewName("")
      console.log("note submitted")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input
          value={newName} 
          onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) => <li key={i}>{person.name}</li>)}
    </div>
  )
}

export default App