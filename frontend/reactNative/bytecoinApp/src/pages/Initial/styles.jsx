import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111"
    },
    headers: {
        padding: 20,
        flex: 1,
        flexDirection: 'row'
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

    button: {
        backgroundColor: '#323232',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24

    }

})

export default styles