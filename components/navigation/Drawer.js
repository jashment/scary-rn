import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Monsters from '../Monsters/Monsters'


const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Monsters">
        <Drawer.Screen name="Monsters" component={Monsters} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}