import { useState, useEffect } from 'react'
import countryService from './services/countries'

const Info = ({names, setCountry}) => {
    const [details, setDetails] = useState(null)
    const [weather, setWeather] = useState(null)
    const [weatherIcon, setWeatherIcon] = useState(null)
    const apiKey = import.meta.env.VITE_KEY

    useEffect(() => {
        if(names.length === 1){
            const fetchData = async () => {
                const countryDetails = await countryService.getInfo(names);
                setDetails(countryDetails)

                const weatherDetails = await countryService.getWeather(countryDetails.capital, apiKey)
                setWeather(weatherDetails)
                
                const weatherIconDetails =  countryService.getIcon(weatherDetails.weather[0].icon)
                setWeatherIcon(weatherIconDetails)
            }

            fetchData()

        }

    },[names])
    
        console.log(weather)
        
    if(names.length > 10){
        return (
            <div>Too many matches</div>
        )
    }else if(names.length === 1 && details){
        
        return (
            <div>
                <h1>{details.name.common}</h1>
                <p>Capital {details.capital}</p>
                <p>Area {details.area}</p>
                <h2>Languages</h2>
                {Object.entries(details.languages).map(([code,name]) => <li key={code}>{name}</li>)}
                <p>{details.flag}</p>
                <h2>Weather in {details.capital}</h2>
                <img
                src={weatherIcon}
                
                />
            </div>
        )
    }else if(names.length === 0){
        return(
            <div>
                Country not found...
            </div>
        )
    }

    return(
        <div>
            {names.map((item,index) => <ul key={index}>{item}<button onClick={(e) => setCountry(item)}>Show</button></ul>)}
        </div>
    )
    
}



export default Info;