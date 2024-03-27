import axios from 'axios'
// import { API_URL } from '../../config';
const instance = axios.create({
    baseURL: "https://schoolbackend-1.onrender.com/"
})
export default instance;                  