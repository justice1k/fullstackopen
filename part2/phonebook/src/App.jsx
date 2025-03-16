import { useState,useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Search from './Search'
import axios from 'axios'
import contactsService from './services/contacts'
import Notification from './Notification'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState(null)

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
        setMessage(`Added ${response.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 3000)
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
      })

      console.log("contact added")
    }
  }

  const removeContact = (id,name) => {

    const remove = window.confirm(`Delete ${name}?`)
    console.log('deleting ', id )
     if(remove){
      contactsService.deleteContact(id)
      const contacts = persons.filter(item => item.id != id)
      setPersons(contacts)
      } else {console.log('delete aborted')}
  
  }

  const contactsToShow = query ? persons.filter(person => person.name.includes(query)) : persons; 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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