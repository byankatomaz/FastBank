import { createContext, useContext, ReactNode, useState } from 'react';

interface AuthContextProps {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void; 
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
