import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from './components/Monsters/Monsters'
import Home from './components/Home/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles/mainStyles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Head">
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Ionicons name="home" size={24} color="black" />}} />
          <Tab.Screen name="Monsters" component={Monsters} options={{tabBarIcon: () => <MaterialCommunityIcons name="emoticon-devil" size={24} color="black" />}} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
