import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        borderColor: '#fff',
        backgroundColor: '#323232',
        padding: 12,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 12,
        marginTop: 10,
        gap: 85
    },

    txtExtract: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
    },

    valorSaida: {
        fontSize: 15,
        textAlign: 'justify',
        fontFamily: 'JetBrainsMono_400Regular',
        color: 'red'
    },

    valorEntrada: {
        fontSize: 15,
        textAlign: 'justify',
        fontFamily: 'JetBrainsMono_400Regular',
        color: 'green'
    },
})

export default styles