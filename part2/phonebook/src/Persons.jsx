const Persons = ({contacts}) => {


    return(
        <>
        {contacts.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
        </>
    )
}

export default Persons