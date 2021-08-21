import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from './components/Monsters/Monsters'
import Home from './components/Home/Home'
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/mainStyles'
import { useFonts, Rye_400Regular } from '@expo-google-fonts/rye';


const Stack = createStackNavigator()

export default function App() {
    useFonts({
        Rye_400Regular,
    });

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tome of Terror" screenOptions={{gestureEnabled: true}}>
          <Stack.Screen name="Tome of Terror" component={Home} options={{ headerTransparent: true, headerTitleAlign: 'center', headerStyle: {height: 75}, headerTitleStyle: {color: 'white', fontFamily: 'Rye_400Regular'}}} />
          <Stack.Screen name="Monsters" component={Monsters} options={{headerTransparent: true, headerTitleAlign: 'center', headerStyle: {height: 75}, headerTitleStyle: {color: 'white'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
