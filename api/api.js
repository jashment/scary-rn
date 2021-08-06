import { BACKEND_URL } from '@env'
import axios from 'axios'

export const getAllMonsters = async () => {
    try {
        const result = await axios({
            method: 'GET',
            url: `${BACKEND_URL}/monsters/all`
        })
        console.log(result)
        return result.data
    } catch (error) {
        console.log(error)
    }

}

