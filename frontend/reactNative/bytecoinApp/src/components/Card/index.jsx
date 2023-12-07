import { View, Text, Image } from "react-native-animatable";
import chip from "../../images/chip.png"
import nfc from "../../images/nfc.png"
import * as Animatable from 'react-native-animatable';
import flagCard from "../../images/flagCard.png"
import { useAuth } from "../../context";
import styles from './styles'
import Modal from 'react-native-modal';

export default function CardSlogan() {

    const { conta, cliente } = useAuth()

    const numeroFormatado = conta?.cartao.numero.replace(/(.{4})/g, "$1 ")

    return (

        <View>
            <View style={styles.nameSlogan}>
                <View animation='fadeInUp' style={styles.title}>
                    <Animatable.Text animation='pulse' style={styles.txt}>Byte</Animatable.Text>
                    <Text style={styles.secondPartName}>Koin</Text>
                    <Image source={nfc} style={styles.nfcC} />
                </View>
                <Image source={chip} style={styles.chipC} />

                <View style={styles.containerBottom}>
                    <View style={styles.cartaoStyle}>
                        <Text style={styles.txtCard}>
                            {numeroFormatado}
                        </Text>
                        <Text style={styles.txtCard}>
                            {cliente?.nome}
                        </Text>

                        <View style={styles.txtUltimo}>
                            <Text style={styles.txtCard}>
                                {conta?.cartao.vencimento}
                            </Text>
                            <Text  style={styles.txtCard}>
                                {conta?.cartao.cvv}
                            </Text>
                        </View>



                    </View>
                    <Image source={flagCard} style={styles.imagemBand} />
                </View>

            </View>
        </View>
    )
}
