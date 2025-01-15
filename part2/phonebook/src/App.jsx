import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0506795664'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()

    const ifExists = persons.find(person => person.name === newName && person.number === newNumber)

    if(ifExists != undefined){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewNumber("")
    } else if(newName === "" || newNumber === ""){
      alert("Please enter a name and number to add to phonebook")
    }else{
      const newContact = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newContact))
      setNewName("")
      setNewNumber("")
      console.log("contact added")
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
          number: <input type="number"
          value={newNumber}
          onChange={handleNumberChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) => <li key={i}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App