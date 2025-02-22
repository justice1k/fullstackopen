import { useState, useEffect } from 'react'
import countryService from './services/countries'

const Info = ({names}) => {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        if(names.length === 1){
        countryService.getInfo(names)
        .then( response => {
            setDetails(response)
        })
        }

    },[names])
    

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
            {names.map((item,index) => <ul key={index}>{item}</ul>)}
        </div>
    )
    
}



export default Info;