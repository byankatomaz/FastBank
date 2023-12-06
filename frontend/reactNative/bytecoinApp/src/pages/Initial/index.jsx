import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Modalize } from 'react-native-modalize';
import styles from './styles'
import background from '../../images/backgroundConvi.png'
import cartao from '../../images/cartao.png'
import { Feather } from '@expo/vector-icons'
import CardSlogan from '../../components';

export default function Initial({ navigation }) {
    const { cliente, conta } = useAuth();

    // useEffect(() => console.log('initial', conta))
    // const modalRef = useRef(null || Modalize);
    // function openModal(){ modalRef?.current?.open()};

    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    // setModalVisible(!isModalVisible);
    // };
    

    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Text style={styles.txtHeader}> Bem vindo, {'\n'} {cliente?.nome} </Text>

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

                <View style={styles.acoes1}>
                    <View style={styles.acoes}>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('CreditRating')}>
                            <Text style={styles.txtAcoesButton}>Avaliação de Crédito</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('Loan')}>
                            <Text style={styles.txtAcoesButton}>Empréstimo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.acoes}>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('TED')}>
                            <Text style={styles.txtAcoesButton}>Transferência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAcoes} onPress={() => navigation.navigate('DEP')}>
                            <Text style={styles.txtAcoesButton}>Depósito</Text>
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
                <TouchableOpacity style={styles.buttonCartao} onPress={() =>{
                    navigation.navigate('Cartao')
                    // toggleModal
                }}>
                    <View style={styles.imagemCartao}>
                        <Image source={cartao}></Image>
                    </View>
                    <View style={styles.titulos}>
                        <Text style={styles.txtCartao}>
                            Nome Gravado:
                        </Text>
                        <Text style={styles.txtCartao}>
                            {cliente?.nome}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* {conta && (
                 <CardSlogan isVisible={isModalVisible} closeModal={toggleModal}/>
            )} */}
           


        </View>
    )
}
