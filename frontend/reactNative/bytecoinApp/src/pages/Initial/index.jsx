import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Text, View, TouchableOpacity } from 'react-native'
import { ClienteService } from '../../services/clienteService'
import styles from './styles'

export default function Initial({ navigation }) {
    const { accessToken, cliente, setCliente, conta, setConta } = useAuth();

    useEffect(() => {

        async function clienteData() {
            try {

                if (accessToken) {
                    const response = await ClienteService.infoClient(accessToken);
                    setCliente(response.data)
                }

            } catch (error) {
                console.error('Erro ao obter informações do cliente:', error);
            }
        };

        if (accessToken) {
            clienteData()
        }

    }, []);

    useEffect(() => {
        async function contaData() {
            try {
                if (cliente) {
                    console.log(cliente['id'])
                    const response = await ClienteService.ContaClient(accessToken, cliente['id']);
                    setConta(response.data)
                }
            }
            catch (error) {
                console.error('Erro ao obter informações da conta:', error);
            }
        }
        if (cliente) {
            contaData()
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Text style={styles.txtHeader}> Bem vindo, {'\n'} Jovem {cliente?.nome} </Text>

                <View style={styles.buttonsHeader}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtHeader}>?D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtHeader}>?A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtHeader}>?P</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreditRating')}>
                <Text style={styles.txtHeader}>?P</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loan')}>
                <Text style={styles.txtHeader}>LOAN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Movements')}>
                <Text style={styles.txtHeader}>Moviments</Text>
            </TouchableOpacity>

        </View>
    )
}
