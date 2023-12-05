import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { ClienteService } from '../../services/clienteService'
import styles from './styles'
import background from '../../images/backgroundConvi.png'
import cartao from '../../images/cartao.png'
import { Feather } from '@expo/vector-icons'

export default function Initial({ navigation }) {
    const { accessToken, cliente, setandoConta, conta } = useAuth();






    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Text style={styles.txtHeader}> Bem vindo, {'\n'} Jovem {cliente?.nome} </Text>

                <View style={styles.buttonsHeader}>
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={styles.txtHeader}>?D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={styles.txtHeader}>?A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={styles.txtHeader}>
                            <Feather name='user' size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerSaldo}>
                <Text style={styles.saldo}>Saldo em sua conta</Text>
                <Text style={styles.saldo}>R$ {conta?.saldo}</Text>
                <View style={styles.horizontalLine} />
                <View>
                    <TouchableOpacity style={styles.extrato} onPress={() => navigation.navigate('Extract')}>
                        <Text style={styles.saldo}>Exibir extrato</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.acoesContainer}>
                <Text style={styles.txtAcoes}>Ações Rápidas</Text>

                <View style={styles.acoes}>
                    <View>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('CreditRating')}>
                            <Text style={styles.txtAcoesButton}>Crédito</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('Loan')}>
                            <Text style={styles.txtAcoesButton}>Empréstimo</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('TED')}>
                            <Text style={styles.txtAcoesButton}>Transferência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('PIX')}>
                            <Text style={styles.txtAcoesButton}>Pix</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <View style={styles.imagemContainer}>
                <Text style={styles.txtAcoes}>Para você</Text>
                <View style={styles.imagemBack}>
                    <Image source={background}></Image>
                </View>

            </View>

            <View style={styles.pixContainer}>
                <Text style={styles.txtAcoes}>Pix</Text>
                <View style={styles.pixPrin}>
                    <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('PIX')}>
                        <Text style={styles.txtAcoesButton}>Pix</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.cartaoContainer}>
                <Text style={styles.txtAcoes}>Meus Cartões</Text>
                <TouchableOpacity style={styles.buttonCartao} onPress={() => navigation.navigate('PIX')}>
                    <View style={styles.imagemCartao}>
                        <Image source={cartao}></Image>
                    </View>
                    <View style={styles.titulos}>
                        <Text style={styles.txtCartao}>
                            Nome:
                        </Text>
                        <Text style={styles.txtCartao}>
                            {cliente?.nome}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>


        </View>
    )
}
