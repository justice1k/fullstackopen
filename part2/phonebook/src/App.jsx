import { useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Search from './Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0506795664'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')

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

    const ifExists = persons.some(person => person.name === newName && person.number === newNumber)
    if(ifExists){
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

  const contactsToShow = query ? persons.filter(person => person.name.includes(query)) : persons; 
  return (
    <div>
      <h2>Phonebook</h2>
        <Search query={query} setQuery={setQuery} />
        <h3>Add a new</h3>
      <PersonForm 
        addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons contacts={contactsToShow} />
    </div>
  )
}

export default App