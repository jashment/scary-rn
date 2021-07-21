import React from 'react'
import { View } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from '../Monsters/Monsters'


const Drawer = createDrawerNavigator();

const Head = ({navigation: {toggleDrawer}}) =>
    <SafeAreaView>
        <View>
            <Header
                style={{ borderBottomColor: '#2c2b30' }}
                backgroundColor='#2c2b30'
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => toggleDrawer()}}
                centerComponent={{ text: 'Scary App', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    </SafeAreaView>
export default Head;