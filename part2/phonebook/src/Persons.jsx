const Persons = ({contacts}) => {


    return(
        <>
        {contacts.map((person,i) => <li key={i}>{person.name} {person.number}</li>)}
        </>
    )
}

export default Persons