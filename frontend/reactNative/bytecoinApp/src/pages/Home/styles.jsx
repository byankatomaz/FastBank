import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerLogo: {
    position: 'relative',
    height: '100%',
    backgroundColor: "#000",
    justifyContent: "center",
    width: '100%',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 15,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100
  },

  buttonCadastrar: {
    backgroundColor: 'rgba(169, 29, 29, 0.64)',
    paddingVertical: 8,
    paddingHorizontal: 90,
    borderRadius: 5,

  },

  buttonLogin: {
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 103,
    borderRadius: 5,

  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'JetBrainsMono_400Regular',
  },
})