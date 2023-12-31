import {
  View, Text, Image, TextInput, TouchableOpacity, Alert,
  ToastAndroid
} from 'react-native'

import React, { useEffect, useState } from 'react'
import styles from './styles'
import Fundo from '../../images/fundoHome.png'
import * as Animatable from 'react-native-animatable'
import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import DropDownPicker from 'react-native-dropdown-picker';
import { useAuth } from '../../context/AuthContext';

export default function SignUp({ navigation }) {

  const { register, setValue, handleSubmit } = useForm();
  const [cep, setCep] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

  const [endereco, setEndereco] = useState({});
  const [step, setStep] = useState(1);

  const [open, setOpen] = useState(false);
  const [valor, setValor] = useState(null);
  const [items, setItems] = useState([
    { label: 'Pessoa Fisica', value: 'PF' },
    { label: 'Pessoa Juridica', value: 'PJ' }
  ]);


  useEffect(() => {
    register('nome')
    register('cpf')
    register('tipo')
    register('salario')
    register('cep')
    register('rua')
    register('bairro')
    register('cidade')
    register('estado')
    register('num')
    register('email')
    register('password')
  }, [register])

  // const handlePickerImage = async () => {
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) {
  //     Alert.alert(
  //       'Permissão necessária',
  //       'Permita que sua aplicação acesse as imagens'
  //     );
  //   } else {
  //     const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
  //       allowsEditing: true,
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       base64: false,
  //       aspect: [4, 4],
  //       quality: 1,
  //     });

  //     if (canceled) {
  //       ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
  //     } else {
  //       const fileName = assets[0].uri.substring(assets[0].uri.lastIndexOf('/') + 1, assets[0].uri.length)
  //       const typeImage = fileName.split('.')[1]

  //       const formData = new FormData()

  //       formData.append('imagem', JSON.parse(JSON.stringify({
  //         name: fileName,
  //         uri: assets[0].uri,
  //         type: 'image/' + typeImage
  //       })))

  //       setTesteImage(formData)
  //     }
  //   }
  // };


  const onSubmit = async (values) => {
    try {
      if (step < 3) {
        setStep(step + 1);
      } else {
        values.tipo = valor
        values.ativo = true

        const response = await ClienteService.createClient(values);

        if (response.status === 201) {
          console.log('Enviado: ', response.data)

          Alert.alert('Você foi cadastrado com sucesso!', '', [
            {
              text: 'OK',
              onPress: () => {
                console.log('Botão "OK" pressionado');
                navigation.navigate('Home');
              },
            },
          ]);
        }
      }

    } catch (error) {
      console.error('Erro ao enviar o cliente:', error);
    }
  };

  const searchCep = async () => {

    if (cep) {
      const urlBase = `https://api.postmon.com.br/v1/cep/${cep}`
      try {
        const response = await fetch(urlBase)
        if (response.status == 200) {

          const enderecoJson = await response.json()
          setEndereco(enderecoJson)

        } else {
          console.error('Erro na resposta da requisição do CEP:', response.statusText);
        }

      } catch (error) {
        console.log('Erro ao pesquisar CEP')
      }
    }
  }

  useEffect(() => {
    if (endereco) {
      setRua(endereco.logradouro);
      setBairro(endereco.bairro);
      setCidade(endereco.cidade);
      setEstado(endereco.estado);
    }
  }, [endereco]);


  const CEPChange = (text) => {
    const cepInput = text;
    setCep(cepInput);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.firstInput}>
     
            <Text style={styles.title}>Nome completo</Text>
            <TextInput onChangeText={text => setValue('nome', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu nome' style={styles.input} />

            <Text style={styles.title}>CPF</Text>
            <TextInput onChangeText={text => setValue('cpf', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu CPF' style={styles.input} />

            <Text style={styles.title}>Salario</Text>
            <TextInput onChangeText={text => setValue('salario', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu salario' style={styles.input} />

            <Text style={styles.title}>Tipo de Pessoa</Text>
            <DropDownPicker
              style={styles.picker}
              open={open}
              value={valor}
              items={items}
              setOpen={setOpen}
              setValue={setValor}
              setItems={setItems}
            />

          </View>
        );
      case 2:
        return (
          <View style={styles.firstInput}>
            <Text style={styles.title}>Email</Text>
            <TextInput keyboardType="email-address" onChangeText={text => setValue('email', text)} placeholderTextColor='#6C6B6B' placeholder='Digite seu email' style={styles.input} />

            <Text style={styles.title}>Senha</Text>
            <TextInput secureTextEntry onChangeText={text => setValue('password', text)} placeholderTextColor='#6C6B6B' placeholder='Digite sua senha' style={styles.input} />
          </View>
        );
      case 3:
        return (
          <View style={styles.firstInput}>
            <Text style={styles.title}>CEP</Text>
            <TextInput onBlur={searchCep} value={cep} onChangeText={text => { setValue('cep', text); CEPChange(text) }} placeholderTextColor='#6C6B6B' placeholder='Digite seu CEP' style={styles.input} />

            <Text style={styles.title}>Rua</Text>
            <TextInput value={rua} onChangeText={setValue('rua', rua)} placeholderTextColor='#6C6B6B' placeholder='Rua' style={styles.input} />

            <Text style={styles.title}>Bairro</Text>
            <TextInput value={bairro} onChangeText={setValue('bairro', bairro)} placeholderTextColor='#6C6B6B' placeholder='Bairro' style={styles.input} />

            <Text style={styles.title}>Cidade</Text>
            <TextInput value={cidade} onChangeText={setValue('cidade', cidade)} placeholderTextColor='#6C6B6B' placeholder='Cidade' style={styles.input} />

            <Text style={styles.title}>Estado</Text>
            <TextInput value={estado} onChangeText={setValue('estado', estado)} placeholderTextColor='#6C6B6B' placeholder='Estado' style={styles.input} />

            <Text style={styles.title}>Numero</Text>
            <TextInput onChangeText={text => setValue('num', text)} placeholderTextColor='#6C6B6B' placeholder='Numero da Casa' style={styles.input} />
          </View>
        );
      default:
        return null;
    }
  };


  return (

    <View>
      <View>
        <Image source={Fundo} style={styles.logo} />
      </View>
      <Animatable.View style={styles.containerLogin} animation="fadeInUp">
        <View style={styles.form}>
          <Text style={styles.loginTitle}>Cadastra-se</Text>
          {renderFormStep()}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonTxt}>{step < 3 ? 'Próximo' : 'Cadastrar'}</Text>
          </TouchableOpacity>
          {step !== 1 && (
            <TouchableOpacity style={styles.buttonRegister} onPress={() => setStep(step - 1)}>
              <Text style={styles.registerTxt}>Voltar</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animatable.View>
    </View>

  )
}

