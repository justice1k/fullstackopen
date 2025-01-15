import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0506795664'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')
  const [match, setMatch] = useState(false)

  const handleSearchChange = (event) => {
    console.log("Searchig for: ", event.target.value)
    setQuery(event.target.value)
    const isMatch = persons.some(person => person.name.includes(event.target.value))
    setMatch(isMatch)

  }

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

  const contactsToShow = query ? persons.filter(person => person.name.includes(query)) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <input value={query} onChange={handleSearchChange}/>
      </div>

      <form onSubmit={addContact}>
        <h3>Add a new contact</h3>
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
      {contactsToShow.map((person,i) => <li key={i}>{person.name} {person.number}</li>)}
      {/* {persons.map((person,i) => <li key={i}>{person.name} {person.number}</li>)} */}
    </div>
  )
}

export default App