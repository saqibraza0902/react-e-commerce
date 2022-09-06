import axios from 'axios'

const api = axios.create({
    baseURL: "https://react-app-store-api.herokuapp.com/"
})

export default api