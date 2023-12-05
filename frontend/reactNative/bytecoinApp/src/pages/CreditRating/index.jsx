import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context';
import styles from './styles'
import { ClienteService } from '../../services/clienteService'

export default function CreditRating({ navigation }) {
  const { conta, accessToken } = useAuth();

  const onSubmit = async () => {
    try {
      console.log('entrei')
      const values = {'conta': conta.id};

      if (values) {
        console.log(accessToken)
        const response = await ClienteService.AvaliacaoCred(accessToken, values);
        console.log(response)

        if (response.status === 201) {
          console.log('Enviado: ', response.data)

          navigation.navigate('Initial');
        }
      }

    } catch (error) {
      console.error('Erro ao enviar o cliente:', error);
    }
  };



  return (
    <View style={styles.container}>
      <Text> TELA AVALIAÇÃO DE CREDITO </Text>
      <TouchableOpacity onPress={onSubmit}>
        <Text style={{color: '#fff'}}> VERIFICAR SE O CLIENTE É PREMIUM</Text>
      </TouchableOpacity>
    </View>
  )
}
