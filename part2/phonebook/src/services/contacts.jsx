
import axios from 'axios'
const baseURL = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const create = newContact => {

    return axios.post(baseURL, newContact).then(response => response.data)
}

//DELETE soon

const deleteContact = id => {
    
    axios
    .delete(`${baseURL}/${id}`)
    .then( response => console.log('deleted ', response.data.id))

}

export default{
    getAll,
    create,
    deleteContact
}