import axios from "axios";
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountry = () => {
    
    return axios.get(baseURL).then(response => response.data.map(item => item.name.common))
}

const getInfo = (item) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${item}`).then(response => response.data)
}

// Auth issues with weather

const getWeather = (capital, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
    return axios.get(url).then(response => response.data)
}

const getIcon = (code) => {
    

    return `https://openweathermap.org/img/wn/${code}@2x.png`
}

export default {getCountry, getInfo, getWeather, getIcon}