import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://efaktury-d30eb-default-rtdb.firebaseio.com/'
})

export default instance