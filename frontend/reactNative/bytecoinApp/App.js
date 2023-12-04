import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

import {
  useFonts,
  JetBrainsMono_400Regular
} from '@expo-google-fonts/jetbrains-mono';


export default function App() {

  let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
    

  );
}
