import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        justifyContent: 'center',
    },

    cartao: {
        display: 'flex',
        alignSelf: 'center',
        width: '80%',
        gap: 15
    },

    txtDados: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
      }
})

export default styles