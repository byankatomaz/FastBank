import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    txt: {
        fontSize: 26,
        color: 'white',
        fontWeight: '700',
        fontFamily: 'JetBrainsMono_400Regular',
    },

    slogan: {
        color: 'white',
        borderRadius: 3,
        width: '50%',
        fontSize: 20,
        marginBottom: 12,
    },

    nameSlogan: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: 200,
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#3a1111",
        fontFamily: 'JetBrainsMono_400Regular',
    },

    txtInformation: {
        color: 'white',
        fontFamily: 'inter',
        fontSize: 22,
        marginTop: 25,
    },

    secondPartName: {

        color: 'white',
        fontSize: 26,
        fontFamily: 'JetBrainsMono_400Regular',
    },

    title: {
        flexDirection: 'row',
        fontFamily: 'JetBrainsMono_400Regular',

    },
    chipC: {
        flexDirection: 'row',
        top: 25
    },

    nfcC: {
        left: 175,
        top: 10
    },

    containerBottom:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 90
    },

    imagemBand:{
        marginTop: 80
    },

    txtCard: {
        color: '#fff',
        fontFamily: 'JetBrainsMono_400Regular',
    },
    
    cartaoStyle: {
        display: 'flex',
        marginTop: 40,
        gap: 5
    },

    txtUltimo:{
        display: 'flex',
        flexDirection: 'row',
        gap: 50
    }
})

export default styles