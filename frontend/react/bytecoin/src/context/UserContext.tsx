
import { UserCliente } from 'interfaces';
import { createContext, useContext, ReactNode, useState } from 'react';

// Definindo o tipo para as propriedades do contexto de usuário
interface UserContextProps {
  dataUser: UserCliente | null; // Dados do usuário ou nulo
  setDataUser: React.Dispatch<React.SetStateAction<UserCliente | null>>; 
}

// Criando o contexto de usuário com o tipo especificado
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Definindo as propriedades para o provedor de usuário
interface UserProviderProps {
  children: ReactNode;
}

// Componente provedor de usuário que gerencia os dados do usuário
export function UserProvider({ children }: UserProviderProps) {
  // Estado local para armazenar os dados do usuário
  const [dataUser, setDataUser] = useState<UserCliente | null>(null);

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Função hook para utilizar o contexto de usuário
export function useUser(){
  const context = useContext(UserContext);

  // Lança um erro se o hook for utilizado fora do provedor de usuário
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  return context;
}
