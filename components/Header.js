import React from 'react'
import { View } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
const Head = () =>
    <SafeAreaView>
        <View>
            <Header
                style={{ borderBottomColor: '#2c2b30' }}
                backgroundColor='#2c2b30'
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'Scary App', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    </SafeAreaView>
export default Head;