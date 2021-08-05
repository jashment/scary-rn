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
                    <FlatList
                            inverted
                            data={[
                                {
                                    key: 'Werewolf',
                                    uri: 'https://cdn.pixabay.com/photo/2018/04/09/22/17/mammal-3305724_1280.jpg'
                                },
                                {
                                    key: 'Shapeshifter',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg'
                                },
                                {
                                    key: 'Dragon',
                                    uri: 'https://cdn.pixabay.com/photo/2018/01/25/13/25/outdoors-3106126_1280.jpg'
                                },
                                {
                                    key: 'Vampire',
                                    uri: 'https://images.pexels.com/photos/6394135/pexels-photo-6394135.jpeg'
                                }
                            ]}
                            renderItem = {({item}) => {
                                return (
                                        <View>
                                            <Card style={{height: '500px'}}>
                                                <Text style={{
                                                    paddingVertical: 10,
                                                    fontSize: 15,
                                                    paddingStart: 5,
                                                    paddingEnd: 16,
                                                    color: 'black'
                                                }}>{item.key}</Text>
                                                <Image source={{uri: item.uri}} style={{height: 300, width: 300}}/>
                                            </Card>
                                        </View>
                                )}}
                        />
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Monsters