import axios from "axios";
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountry = () => {
    
    return axios.get(baseURL).then(response => response.data.map(item => item.name.common))
}

const getInfo = (item) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${item}`).then(response => response.data)
}

export default {getCountry, getInfo}