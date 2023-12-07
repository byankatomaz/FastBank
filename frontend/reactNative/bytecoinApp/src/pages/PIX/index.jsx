import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'

import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { useAuth } from '../../context/AuthContext'


export default function PIX({ navigation }) {

  const { register, setValue, handleSubmit } = useForm();
  const { conta, accessToken, updateConta } = useAuth();

  useEffect(() => {
    register('valor')
    register('conta_destino')

  }, [register])

  const onSubmit = async (values) => {
    try {
      console.log(values)
      const data = {
        conta_destino: values.conta_destino,
        valor: values.valor.toString(),
        tipo_movimentacao: "PIX",
        conta_origem: conta['id'], 
      };

      console.log(data)
      

      if (data) {
        console.log(accessToken)
        const response = await ClienteService.Movimentacao(accessToken, data);
        console.log(response)

        if (response.status === 201) {
          console.log('Enviado: ', response.data)
          Alert.alert('Seu PIX foi enviado com sucesso!', '', [
            {
              text: 'OK',
              onPress: () => {
                console.log('Botão "OK" pressionado');
                navigation.navigate('Initial');
              },
            },
          ]);
        }
      }

      updateConta()

    } catch (error) {
      Alert.alert('Não foi possivel fazer o pix', '', [
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
        <Text style={styles.loginTitle}>PIX</Text>

        <Text style={styles.title}>Valor</Text>
        <TextInput onChangeText={text => setValue('valor', text)} placeholderTextColor='#6C6B6B' placeholder='Valor' style={styles.input} />

        <Text style={styles.title}>Conta de Destino</Text>
        <TextInput onChangeText={text => setValue('conta_destino', text)} placeholderTextColor='#6C6B6B' placeholder='Conta de Destino' style={styles.input} />

      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonTxt}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
