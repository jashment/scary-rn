import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from './components/Monsters/Monsters'
import Home from './components/Home/Home'
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/mainStyles'


const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerTransparent: true, headerTitleAlign: 'center', headerStyle: {height: 75}, headerTitleStyle: {color: 'white'}}} />
          <Stack.Screen name="Monsters" component={Monsters} options={{headerTransparent: true, headerTitleAlign: 'center', headerStyle: {height: 75}, headerTitleStyle: {color: 'white'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
