import axios from 'axios'

const getNames = () => {
    return axios.get( 'http://localhost:3001/names' )
}

export default { getNames: getNames }