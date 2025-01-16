const Search = ({query, setQuery}) => {


    return(
    <div>
        Search: <input value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
    )

}

export default Search