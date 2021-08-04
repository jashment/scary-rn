import React from 'react'
import { ImageBackground, Image, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'


const Monsters = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/cat.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
            <View style={styles.container}>
                
                    {/* <View> */}
                    <FlatList
                            style={{ flex: 1 }}
                            inverted
                            // keyExtriactor={(time, index) => index.toString()}
                            data={[
                                {
                                    key: 'wolf',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                },
                                {
                                    key: 'bear',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                },
                                {
                                    key: 'dragon',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                },
                                {
                                    key: 'vampire',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                }
                            ]}
                            renderItem={(item) => {
                                return (
                                    <View>
                                        <View style={styles.container}>
                                    <Card style={{height: '500px'}}>
                                        <Text style={{
                                            paddingVertical: 10,
                                            fontSize: 15,
                                            paddingStart: 5,
                                            paddingEnd: 16,
                                            color: 'black'
                                        }}>{item.key}</Text>
                                            </Card>
                                            </View>
                                    </View>
                                )}}
                        />
                    {/* </View> */}
                
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Monsters