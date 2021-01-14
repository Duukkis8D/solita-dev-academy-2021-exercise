import axios from 'axios'

const getNames = () => {
    return axios.get( '/api/names' )
}

export default { getNames }