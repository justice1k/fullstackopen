const PersonForm = (props) => {


    return(
        <form onSubmit={props.addContact}>
        <h3>Add a new contact</h3>
        <div>
          name: <input
          value={props.newName} 
          onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input type="number"
          value={props.newNumber}
          onChange={props.handleNumberChange} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
    )
}

export default PersonForm