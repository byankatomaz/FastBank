import { View, Text, Image } from "react-native-animatable";
import chip from "./../images/chip.png"
import nfc from "./../images/nfc.png"
import * as Animatable from 'react-native-animatable';
import flagCard from "./../images/flagCard.png"
import { useAuth } from "./../context";
import styles from './styles'
import Modal from 'react-native-modal';

export default function CardSlogan() {

    const { conta, cliente } = useAuth()

    const numeroFormatado = conta?.cartao.numero.replace(/(.{4})/g, "$1 ")

    return (

        // <Modal
        //     isVisible={isVisible}
        //     onBackdropPress={closeModal}
        //     style={{ justifyContent: 'center', alignItems: 'center' }}
        // >
            <View>
                <View style={styles.nameSlogan}>
                    <View animation='fadeInUp' style={styles.title}>
                        <Animatable.Text animation='pulse' style={styles.txt}>Byte</Animatable.Text>
                        <Text style={styles.secondPartName}>Koin</Text>
                        <Image source={nfc} style={styles.nfcC} />
                    </View>
                    <Image source={chip} style={styles.chipC} />
                    <Text style={styles.number}>
                        {numeroFormatado}
                    </Text>
                    <Text style={styles.nameCard}>
                        {cliente?.nome}
                    </Text>
                    <Text style={{ top: 9, position: "relative", left: 140, color: "white", fontSize: 18, }}>
                        {conta?.cartao.vencimento}
                    </Text>

                    <Image source={flagCard} style={{ left: 245 }} />

                </View>
            </View>
        // </Modal>
    )
}
