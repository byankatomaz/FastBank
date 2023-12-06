import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import { useForm } from 'react-hook-form'
import { ClienteService } from '../../services/clienteService'
import { useAuth } from '../../context/AuthContext'


export default function Extract() {

  const { conta } = useAuth();

  const movimentacoes = conta.extrato.movimentacoes
  console.log('mov', movimentacoes)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatStyle}
        data={movimentacoes}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => 
          <Text>TESTE</Text>
        }
      />
    </View>
  )
}
