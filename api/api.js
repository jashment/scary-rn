import { REACT_APP_BACKEND_URL } from '@env'
import { axiosInstance } from './axiosInstance'
import { Platform } from 'react-native'

export const getAllMonsters = async () => {
    try {
        const result = await axiosInstance.get('/monsters/all', {data: undefined})
        // console.log(result)
        return result.data
    } catch (error) {
        // console.log('Also here')
        console.log(error)
    }

}

