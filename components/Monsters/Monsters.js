import React, {useState, useEffect} from 'react'
import { ImageBackground, FlatList, Text, View } from 'react-native'
import {Card} from 'react-native-elements'
import styles from '../../styles/mainStyles'
import { getAllMonsters } from '../../api/api'
import { useFonts, Rye_400Regular } from '@expo-google-fonts/rye';


const Monsters = () => {
    const [monsters, setMonsters] = useState()

    useFonts({
        Rye_400Regular,
    });

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
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/cat.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
                <View style={{ paddingTop: 100 }}>
                    <FlatList
                        data={monsters}
                        keyExtractor = {key => key.id}
                        renderItem = {({item}) => 
                            (
                                <Card containerStyle={{backgroundColor: 'rgba(128, 128, 128, 0.5)', borderColor: 'rgba(128, 128, 128, 0.3)', justifyContent: 'center'}} wrapperStyle={{alignItems: 'center'}}>
                                    <Card.Title style={{ fontFamily: 'Rye_400Regular', fontSize: 32, color: 'rgba(255, 255, 255, 1)'}}>{item.name}</Card.Title>
                                    <Card.Image source={item.url ? { uri: item.url } : require('../../assets/ghost_skull.png')} style={{ height: 300, width: 300, borderRadius: 100 }} />
                                    <Card.Divider/>
                                    <Text style={{color: 'rgba(255, 255, 255, 1)'}}>{item.description}</Text>
                                </Card>
                            )}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Monsters