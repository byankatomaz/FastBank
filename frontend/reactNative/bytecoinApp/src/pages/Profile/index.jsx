import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { useAuth } from '../../context';
import styles from './styles'
import { ClienteService } from '../../services/clienteService'

export default function Profile({ navigation }) {
  const { conta, cliente } = useAuth();


  return (
    <View style={styles.container}>
      <View style={styles.containerEx}>
        <Text style={styles.explicacaoText}>
          { cliente?.nome }
        </Text>

        <Text style={styles.explicacaoText}>
          Agência: { conta?.agencia }
        </Text>

        <Text style={styles.explicacaoText}>
          Número da Conta: { conta?.numero }
        </Text>
      </View>
    </View>
  )
}
