import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { useAuth } from '../../context/AuthContext'


export default function Loan({ navigation }) {

  const { register, setValue, handleSubmit } = useForm();
  const { conta, accessToken, updateConta } = useAuth();

  useEffect(() => {
    register('valor_solicitado')
    register('parcelas')

  }, [register])

  const onSubmit = async (values) => {
    try {
      console.log(conta)
      const data = {
        valor_solicitado: values.valor_solicitado.toString(),
        parcelas: parseInt(values.parcelas),
        conta: conta['id'], 
      };

      console.log(data)
      

      if (data) {
        console.log(accessToken)
        const response = await ClienteService.Emprestimo(accessToken, data);
        console.log(response)

        if (response.status === 201) {
          console.log('Enviado: ', response.data, '', [
            {
              text: 'OK',
              onPress: () => {
                console.log('Botão "OK" pressionado');
                navigation.navigate('Initial');
              },
            },
          ]);
        }

        updateConta()
      }

    } catch (error) {
      Alert.alert('Não foi possivel fazer um empréstimo', '', [
        {
          text: 'OK',
          onPress: () => {
            console.log('Botão "OK" pressionado');
            navigation.navigate('Initial');
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.loginTitle}>Emprestimo</Text>

        <Text style={styles.title}>Valor</Text>
        <TextInput onChangeText={text => setValue('valor_solicitado', text)} placeholderTextColor='#6C6B6B' placeholder='Valor solicitado' style={styles.input} />

        <Text style={styles.title}>Parcelas</Text>
        <TextInput onChangeText={text => setValue('parcelas', text)} placeholderTextColor='#6C6B6B' placeholder='Parcelas' style={styles.input} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonTxt}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
