import React, {useState, useEffect} from 'react'
import { ImageBackground, Image, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'
import { getAllMonsters } from '../../api/api'


const Monsters = () => {
    const [monsters, setMonsters] = useState()

    const getMonstersFromDatabase = async () => {
        try {
            const result = await getAllMonsters()
            await setMonsters(result)
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
            <View>
                    <FlatList
                            data={monsters}
                            renderItem = {({item}) => {
                                return (
                                        <View>
                                            <Card style={{height: '500px'}}>
                                                <Text style={{fontFamily: 'Rye_400Regular', fontSize: 32}}>{item.name}</Text>
                                                <Image source={{ uri: item.url }} style={{ height: 300, width: 300 }} />
                                                <Text>{ item.description }</Text>
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