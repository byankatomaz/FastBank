import React, { useState, useEffect } from 'react'
import styles from './styles'
import Fundo from '../../images/fundoHome.png'

import {
  useFonts,
  JetBrainsMono_400Regular,
  JetBrainsMono_100Thin_Italic
} from '@expo-google-fonts/jetbrains-mono';

import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Home() {


  let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
  });

  if (!fontsLoaded) {
    return undefined;
  }
  


  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          source={Fundo}
          style={{width: '100%'}}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
