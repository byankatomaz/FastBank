import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { useAuth } from '../../context/AuthContext'


export default function Movements({ navigation }) {

  const { register, setValue, handleSubmit } = useForm();
  const { conta, accessToken } = useAuth();

  useEffect(() => {
    register('valor')
    register('tipo_movimentacao')
    register('conta_destino')

  }, [register])

  const onSubmit = async (values) => {
    try {
      console.log(values)
      const data = {
        conta_destino: values.conta_destino,
        valor: values.valor.toString(),
        tipo_movimentacao: values.tipo_movimentacao,
        conta_origem: conta['id'], 
      };

      console.log(data)
      

      if (data) {
        console.log(accessToken)
        const response = await ClienteService.Movimentacao(accessToken, data);
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
      <View style={styles.form}>
        <Text style={styles.loginTitle}>Emprestimo</Text>

        <Text style={styles.title}>Valor</Text>
        <TextInput onChangeText={text => setValue('valor', text)} placeholderTextColor='#6C6B6B' placeholder='Valor solicitado' style={styles.input} />

        <Text style={styles.title}>Valor</Text>
        <TextInput onChangeText={text => setValue('conta_destino', text)} placeholderTextColor='#6C6B6B' placeholder='Valor solicitado' style={styles.input} />


        <Text style={styles.title}>Parcelas</Text>
        <TextInput onChangeText={text => setValue('tipo_movimentacao', text)} placeholderTextColor='#6C6B6B' placeholder='Parcelas' style={styles.input} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonTxt}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
