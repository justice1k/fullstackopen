/* eslint-disable no-unused-vars */
import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const create = newContact => {

    return axios.post(baseURL, newContact).then(response => response.data)
}

//DELETE soon

export default{
    getAll,
    create
}