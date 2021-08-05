import React, {useState, useEffect} from 'react'
import { ImageBackground, Image, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'
import {getAllMonsters} from '../../api/api'


const Monsters = () => {
    const [monsters, setMonsters] = useState()

    const getMonstersFromDatabase = async () => {
        try {
            const result = await getAllMonsters()
            console.log(result)
            setMonsters(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMonstersFromDatabase()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/cat.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
            <View style={styles.container}>
                    <FlatList
                            inverted
                            data={monsters}
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
                                                }}>{item.name}</Text>
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