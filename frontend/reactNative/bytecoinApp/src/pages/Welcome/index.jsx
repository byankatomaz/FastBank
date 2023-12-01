import React, { Component } from 'react'
import styles from './styles'
import Logo from '../../images/logo.png'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'


export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          source={Logo}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}
