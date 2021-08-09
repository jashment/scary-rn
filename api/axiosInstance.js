import axios from 'axios'
import { REACT_APP_BACKEND_URL } from '@env'
import { Platform } from 'react-native'


const chooseUrl = () => {
    let backendUrl
    console.log('here')
    if (Platform.OS === 'android') {
        backendUrl = 'http://10.0.2.2:3000'
    } else if (Platform.OS === 'ios') {
        backendUrl = 'http://localhost:3000'
    } else if (Platform.OS === 'web') {
        backendUrl = 'http://localhost:3000'
    }
    console.log(backendUrl)
    return backendUrl
}

export const axiosInstance = axios.create({
    baseURL: chooseUrl(),
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
})