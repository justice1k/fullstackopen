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
        
        return <>{details.flag}</>
    }

    return(
        <div>
            {names.map((item) => <p>{item}</p>)}
        </div>
    )
    
}



export default Info;