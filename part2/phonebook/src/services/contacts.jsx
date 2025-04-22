
import axios from 'axios'
const baseURL = '/api/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const create = newContact => {

    return axios.post(baseURL, newContact).then(response => response.data)
}


const deleteContact = id => {
    
    axios
    .delete(`${baseURL}/${id}`)
    .then( response => console.log(response.data))

}

export default{
    getAll,
    create,
    deleteContact
}