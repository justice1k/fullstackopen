import { useState, useEffect } from 'react'
import Search from './Search'
import countryService from './services/countries'
import Info from './Info'




function App() {
  const [country, setCountry] = useState('')
  const [names, setNames] = useState([])
  const apiKey = import.meta.env.VITE_KEY

  useEffect(() => {
    console.log('effect')
    countryService.getCountry()
    .then(response => {
      console.log('Response: ', response)
      setNames(response)
    })
    console.log(names)
  }, [])

  console.log("API KEY: ", apiKey)

const toShow = country ? names.filter(item => item.toLowerCase().includes(country.toLowerCase())) : [];

console.log(toShow.length)

  return (
    <>
      <Search country={country} setCountry={setCountry} />
      <Info names={toShow} setCountry={setCountry}/>
    </>
  )
}

export default App
