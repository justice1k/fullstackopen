import { useState,useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Search from './Search'
import axios from 'axios'
import contactsService from './services/contacts'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    console.log('effect')
    contactsService
    .getAll()
    .then(
      response => setPersons(response)
    )
    console.log('promise fulfilled')
      },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
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

      contactsService
      .create(newContact)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
      })

      console.log("contact added")
    }
  }

  const removeContact = id => {
    console.log('deleting ', id )
    contactsService
    .deleteContact(id)
    const contacts = persons.filter(item => item.id != id)
    setPersons(contacts)
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
      <Persons deletePerson={removeContact} contacts={contactsToShow} />
    </div>
  )
}

export default App