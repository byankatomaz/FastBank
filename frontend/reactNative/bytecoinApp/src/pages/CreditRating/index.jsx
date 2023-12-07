import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { useAuth } from '../../context';
import styles from './styles'
import { ClienteService } from '../../services/clienteService'

export default function CreditRating({ navigation }) {
  const { conta, accessToken, updateConta } = useAuth();

  const onSubmit = async () => {
    try {
      console.log('entrei')
      const values = { 'conta': conta.id };

      if (values) {
        console.log(accessToken)
        const response = await ClienteService.AvaliacaoCred(accessToken, values);
        console.log(response)

        if (response.status === 201) {
          console.log('Enviado: ', response.data)
          Alert.alert('Você fez a Avaliação de Credito e apareça em cartão caso aprovado', '', [
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
      Alert.alert('Você não tem os requisitos necessarios para uma Avaliação de Crédito', '', [
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
      <View style={styles.containerEx}>
        <Text style={styles.explicacaoText}>
          A avaliação de crédito{'\n'}É um processo no qual instituições financeiras analisam o histórico de crédito e a capacidade financeira de um cliente para determinar a elegibilidade para serviços financeiros ou empréstimos.
          Esteja ciente de que a solicitação de avaliação de crédito pode afetar sua pontuação de crédito.
        </Text>
      </View>


      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonTxt}>Solicitar Avaliação de Crédito</Text>
      </TouchableOpacity>
    </View>
  )
}
