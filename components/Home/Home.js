import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../../styles/mainStyles'


const Home = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/moon.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
                    <Text style={styles.text}>Home</Text>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}

export default Home