import axios from 'axios'

const getNames = () => {
    return axios.get( 'https://agile-peak-13309.herokuapp.com/api/names' )
}

export default { getNames }