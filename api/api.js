const { createClient } = require('@supabase/supabase-js')
import { SUPABASE_URL, ANON_KEY, SUPABASE_TABLE } from '@env'

const supabase = createClient(SUPABASE_URL, ANON_KEY)

export const getAllMonsters = async () => {
const { data, error } = await supabase
    .from(SUPABASE_TABLE)
    .select()
    
    if (error) {
        console.log(error)
    } else {
        res.send(data)
    }
}

