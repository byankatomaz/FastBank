import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import ExtractCard from '../../components/ExtractCard'
import { useAuth } from '../../context/AuthContext'


export default function Extract() {

  const { conta } = useAuth();

  const movimentacoes = conta.extrato[0].movimentacoes
  console.log('mov', movimentacoes)

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <Text style={styles.txt}>
          Seja bem vindo ao seus históricos de movimentações
        </Text>
      </View>
      <FlatList
        style={styles.flatStyle}
        data={movimentacoes}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(item) =>
          <View>
            <ExtractCard data={item} />
          </View>
        }
      />
    </View>
  )
}
