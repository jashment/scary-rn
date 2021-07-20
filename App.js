import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import Head from './components/navigation/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from './components/Monsters/Monsters'
import Home from './components/Home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <NavigationDrawer> */}
        {/* <View style={styles.container}> */}
          {/* <Head/> */}
          <ImageBackground source={require('./assets/moon.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
            <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Monsters" component={Monsters} />
              </Drawer.Navigator>
            </NavigationContainer>
          </ImageBackground>
        {/* </View> */}
      {/* </NavigationDrawer> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: 'white',
    margin: 'auto',
  }
});
