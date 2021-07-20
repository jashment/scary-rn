import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Monsters = () => {
    return (
        <SafeAreaProvider>
            {/* <View> */}
            <Text style={{ margin: 'auto' }}>Monsters</Text>
            {/* </View> */}
        </SafeAreaProvider>
    )
}

export default Monsters