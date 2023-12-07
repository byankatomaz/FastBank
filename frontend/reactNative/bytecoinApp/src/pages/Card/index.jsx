import { View, Text } from "react-native-animatable";
import styles from './styles'
import CardSlogan from "../../components/Card";
import { useAuth } from "../../context";

export default function Card() {

    const { conta } = useAuth();

    const cartao = conta?.cartao


    return (
        <View style={styles.container}>
            
            <View style={styles.cartao}>
                <Text style={styles.txtDados}>Dados do seu cartão:</Text>
                <CardSlogan />
                <Text style={styles.txtDados}>Limite disponivel: {cartao.limite}</Text>
                <Text style={styles.txtDados}>Tipo de Cartão: {cartao.tipo}</Text>
            </View>

        </View>
    )
}
