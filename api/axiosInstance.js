import axios from 'axios'
import { REACT_APP_BACKEND_URL, NODE_ENV } from '@env'
import { Platform } from 'react-native'


const chooseUrl = () => {
    let backendUrl
    console.log(NODE_ENV)
    if (NODE_ENV === 'production') {
        console.log('prod')
        backendUrl = REACT_APP_BACKEND_URL
    } else if (NODE_ENV === 'development') {
        console.log('dev')
        if (Platform.OS === 'android') {
            backendUrl = 'http://10.0.2.2:3000'
        } else if (Platform.OS === 'ios') {
            backendUrl = 'http://localhost:3000'
        } else if (Platform.OS === 'web') {
            backendUrl = 'http://localhost:3000'
        }
    }
    console.log(backendUrl)
    return backendUrl
}

export const axiosInstance = axios.create({
    baseURL: chooseUrl(),
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
})