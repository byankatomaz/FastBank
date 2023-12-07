import { createContext, useContext, ReactNode, useState } from 'react';

// Definindo o tipo para as propriedades do contexto de autenticação
interface AuthContextProps {
  accessToken: string | null;  // Token de acesso, que pode ser uma string ou nulo
  setAccessToken: (token: string | null) => void;  // Função para definir o token de acesso
}

// Criando o contexto de autenticação com o tipo especificado
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Definindo as propriedades para o provedor de autenticação
interface AuthProviderProps {
  children: ReactNode;  // Componentes filhos que serão envolvidos pelo provedor
}

// Componente provedor de autenticação que gerencia o acesso
export function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

// Função hook para utilizar o contexto de autenticação
export function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}
