import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Fundo from '../../images/fundoHome.png'
import * as Animatable from 'react-native-animatable'
import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { useAuth } from '../../context/AuthContext'

export default function SignIn({ navigation }) {
  const { setAccessToken, accessToken, cliente, setandoConta, setandoCliente } = useAuth();

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  useEffect(() => {

    async function clienteData() {
      try {

        if (accessToken) {
          const response = await ClienteService.infoClient(accessToken);
          setandoCliente(response.data)
          contaData(response.data)
        }

      } catch (error) {
        console.error('Erro ao obter informações do cliente:', error);
      }
    };

    if(accessToken){
      clienteData()
    }
 
  }, [accessToken]);

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


 async function contaData(data) {
      try {
        if (data['id'] == undefined) {
          console.log('sem cliente')
        } else {

          console.log('ENTREI NA CONTA');
          console.log(data['id']);
          const response = await ClienteService.ContaClient(accessToken, data['id']);
          setandoConta(response.data);
        }

      } catch (error) {
        console.error('Erro ao obter informações da conta:', error);
      }
  }


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
          <TextInput keyboardType="email-address" onChangeText={text => setValue('email', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu email' style={styles.input} />

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