import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useAuth } from '../../context';
import styles from './styles'
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons'

export default function Profile({ navigation }) {
  const { conta, cliente } = useAuth();
  const [imageG, setImageG] = useState(null)

  const gallery = async () => {
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log((await result).assets[0].uri)

    if (!(await result).canceled) {
      setImageG((await result).assets[0].uri)
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.containerEx}>
        <TouchableOpacity onPress={gallery} style={styles.buttonImage}>
          
          {imageG ? (
            <Image source={{ uri: imageG }} style={styles.img} />
          ) : (
            <Feather name='user' size={70} color={'#fff'} />
          )}

        </TouchableOpacity>
        <Text style={styles.explicacaoText}>
          {cliente?.nome}
        </Text>

        <Text style={styles.explicacaoText}>
          Agência: {conta?.agencia}
        </Text>

        <Text style={styles.explicacaoText}>
          Número da Conta: {conta?.numero}
        </Text>
      </View>
    </View>
  )
}
