import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  loginTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'JetBrainsMono_400Regular',
  },

  containerLogin: {
    flex: 1,
    backgroundColor: "#000",
    position: 'absolute',
    top: '40%',
    width: '100%',
    borderRadius: 35,
   
  },

  form: {
    width: '100%',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },

  title:{
    color: '#fff',
    width: '100%',
    marginLeft: 100,
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 16,
    marginTop: 50,
  },

  input:{
    width: '60%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    height: 40,
    fontSize: 16,
    color: '#fff'
  },

  buttons: {
    alignItems: 'center',
    bottom: 120,
  },

  button: {
    marginTop: 40,
    backgroundColor: 'rgba(169, 29, 29, 0.64)',
    paddingVertical: 8,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom:7
  },

  buttonTxt: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'JetBrainsMono_400Regular',
  },

  registerTxt: {
    textAlign: 'left',
    fontSize: 12,
    color: '#6C6B6B',
    fontFamily: 'JetBrainsMono_400Regular',
  },

})

export default styles;