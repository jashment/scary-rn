import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Head from './components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Head/>
        <ImageBackground source={require('./assets/moon.jpg')} resizeMode={'cover'} style={styles.backgroundImage}>
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
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
