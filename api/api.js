import { axiosInstance } from './axiosInstance'


export const getAllMonsters = async () => {
    try {
        const result = await axiosInstance.get('/monsters/all')
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllPlaces = async () => {
    try {
        const result = await axiosInstance.get('/places/all')
        return result.data
    } catch (error) {
        console.log(error)
    }
}
