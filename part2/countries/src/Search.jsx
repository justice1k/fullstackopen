const Search = ({country, setCountry}) => {

    return (
        <div>
            Find countries <input value={country} onChange={(e) => setCountry(e.target.value)} ></input>
        </div>
    )
}

export default Search;