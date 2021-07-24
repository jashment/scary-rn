import React from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'


const Monsters = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/cat.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
                    <View style={{ position: 'absolute', bottom: 20, width: '100%', height: '50%' }}>
                        <Card>
                            <Image source={{uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={{ alignSelf: 'center', width: '100%', height: '100%' }}/>
                            <Text>Monsters</Text>
                        </Card>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}

export default Monsters