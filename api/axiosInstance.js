import axios from 'axios'
import { REACT_APP_BACKEND_URL } from '@env'


export const axiosInstance = axios.create({
    baseURL: REACT_APP_BACKEND_URL,
})