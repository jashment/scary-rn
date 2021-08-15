import React from 'react'
import { ImageBackground, Button, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../../styles/mainStyles'


const Home = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/moon.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
                    <View style={{flex: 1, padding: 100}}>
                        <Button color='red' style={styles.btn} title="Monsters" onPress={() => navigation.navigate('Monsters')}>Home</Button>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}

export default Home