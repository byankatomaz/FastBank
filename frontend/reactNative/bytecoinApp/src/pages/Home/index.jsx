import React, { useState, useEffect } from 'react'
import Fundo from '../../images/fundoHome.png'
import * as Animatable from 'react-native-animatable'
import styles from './styles'

import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <View>
        <Image
          source={Fundo}
          style={styles.logo}
        />
      </View>

      <Animatable.View animation='fadeInUp' style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonCadastrar} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
