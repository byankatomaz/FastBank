import { createContext, useContext, ReactNode, useState } from 'react';


const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const [ cliente, setCliente ] = useState(JSON);

  const [ conta, setConta ] = useState(JSON)

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, cliente, setCliente, conta, setConta }}>
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