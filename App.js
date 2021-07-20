import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from './components/Monsters/Monsters'
import Home from './components/Home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles/mainStyles'


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Monsters" component={Monsters} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
