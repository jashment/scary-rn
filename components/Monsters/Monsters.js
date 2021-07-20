import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'


const Monsters = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/cat.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
                    <Card>
                        <Text style={{ margin: 'auto' }}>Monsters</Text>
                    </Card>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}

export default Monsters