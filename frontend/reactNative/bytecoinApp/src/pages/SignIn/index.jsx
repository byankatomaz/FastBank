import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Fundo from '../../images/fundoHome.png'
import * as Animatable from 'react-native-animatable'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { ClienteLoginResolver } from '../../validations/ClienteSchema'
import { useAuth } from '../../context/AuthContext'

export default function SignIn({ navigation }) {
  const { setAccessToken } = useAuth();

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = async (values) => {
  
    try {
      const { status, data } = await ClienteService.loginClient(values);
      
      if (status === 200 && data['access']) {
        setAccessToken(data['access']);
   
        navigation.navigate('Initial');
      }
    } catch (error) {
      console.error('Erro ao logar o cliente:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Fundo}
          style={styles.logo}
        />
      </View>
      <Animatable.View style={styles.containerLogin} animation="fadeInUp">
        <View style={styles.form}>
          <Text style={styles.loginTitle}>Login</Text>

          <Text style={styles.title}>Email</Text>
          <TextInput keyboardType="email-address"  onChangeText={text => setValue('email', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu email' style={styles.input} />

          <Text style={styles.title}>Senha</Text>
          <TextInput secureTextEntry onChangeText={text => setValue('password', text)} placeholderTextColor='#6C6B6B' placeholder='Digite sua senha' style={styles.input} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonTxt}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerTxt}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

    </View>
  )
}