import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        padding: 30
    },
    containerEx: {
        backgroundColor: "#323232",
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        height: '40%',
        borderRadius: 10,
    },
    explicacaoText: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: 20,
        
    },
    img: {
        width: '100%',
        height: '100%',
    },
    buttonImage: {
        backgroundColor: '#515050',
        width: 100,
        height: 100,
        borderRadius: 100,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles