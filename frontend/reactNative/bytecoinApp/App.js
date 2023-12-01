import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {

  

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Routes />
    </NavigationContainer>

  );
}
