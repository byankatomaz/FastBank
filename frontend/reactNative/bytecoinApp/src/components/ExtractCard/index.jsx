import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ExtractCard({ data }) {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtExtract}>Tipo de Movimentação: {data.item.tipo_movimentacao}</Text>
            <View>

                {data.item.conta_destino && (
                    <Text style={styles.txtExtract}>Conta de Destino: {data.item.conta_destino}</Text>
                )}

            </View>

            <View  style={styles.content}>
                
            {
                    data.item.tipo_movimentacao === 'TED' || data.item.tipo_movimentacao === 'PIX' ? (
                        <Text style={styles.valorSaida}>R$ {data.item.valor}</Text>
                    ) : (
                        <Text style={styles.valorEntrada}>R$ {data.item.valor}</Text>
                    )}
            </View>

        </TouchableOpacity>
    )
}