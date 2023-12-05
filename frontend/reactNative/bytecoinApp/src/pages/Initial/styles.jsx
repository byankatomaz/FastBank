import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111"
    },
    headers: {
        padding: 20,
        flexDirection: 'row',

    },

    buttonsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 20
    },

    txtHeader: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular'
    },

    buttonHeader: {
        backgroundColor: '#323232',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5

    },

    containerSaldo: {
        backgroundColor: '#323232',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '80%',
        height: '18%',
        padding: 20,
        borderRadius: 8,
    },

    saldo: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: 12,
    },

    horizontalLine: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginVertical: 10,
    },

    txtAcoes: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: 12,
    },

    acoesContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'col',
        justifyContent: 'space-between'

    },

    acoes: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        gap: 10

    },

    buttonAcoes: {
        backgroundColor: '#323232',
        height: 45,
        width: '39%',
        alignItems: 'center',
        justifyContent: 'center',
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

    txtAcoesButton: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: 10,
    },

    imagemContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'col',
        justifyContent: 'space-between'
    },

    imagemBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    pixContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'col',
        justifyContent: 'space-between'
    },

    pixPrin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
    }, 

    cartaoContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'col',
        justifyContent: 'space-between'
    },

    buttonCartao: {
        backgroundColor: '#323232',
        height: 100,
        width: '50%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        display: 'flex',
        flexDirection: 'row',
        gap: 15,

    },

    txtCartao: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: 10,
    },

    titulos: {
        flexDirection: 'column'
    }





})

export default styles