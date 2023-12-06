import { View,Text, Image } from "react-native-animatable";
import chip from "../../images/chip.png"
import nfc from "../../images/nfc.png"
import * as Animatable from 'react-native-animatable';
import flagCard from "../../images/flagCard.png"
import { useAuth } from "../../context";
import styles from './styles'
import CardSlogan from "../../components";

export default function Card(){
    
    const { conta, cliente } = useAuth()

    return(
        <View style={styles.container}>

            <View style={styles.cartao}>
              <CardSlogan />
            </View>
         
        </View>
    )
}
 