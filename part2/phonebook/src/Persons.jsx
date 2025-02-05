import axios from "axios";

/* eslint-disable react/prop-types */
const Persons = ({contacts, deletePerson}) => {



    return(
        <>
        {contacts.map((person) => <li key={person.id}>{person.name} {person.number} <button onClick={(e) => deletePerson(person.id, person.name)}>Delete</button></li>)}
        </>
    )
}

export default Persons