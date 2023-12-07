import { createContext, useContext, ReactNode, useState } from 'react';


const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const [ cliente, setCliente ] = useState(JSON);

  const [ conta, setConta ] = useState(JSON);

  const [ imagem, setImagem ] = useState(JSON);

  function setandoCliente(values){
    setCliente(values)
  }

  function setandoImagem(values){
    console.log(values)
    setImagem(values)
  }

  function setandoConta(values){
    console.log('setando', values)
    if(values){
      setConta(values)
    }
  }

  return (
    <AuthContext.Provider value={{ setandoImagem, imagem, setandoCliente, setandoConta, accessToken, setAccessToken, cliente, setCliente, conta, setConta }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}