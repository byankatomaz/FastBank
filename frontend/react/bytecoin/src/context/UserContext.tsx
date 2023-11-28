import { UserCliente } from 'interfaces';
import { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextProps {
  dataUser: UserCliente | null;
  setDataUser: React.Dispatch<React.SetStateAction<UserCliente | null>>
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [dataUser, setDataUser] = useState<UserCliente | null>(null);


  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within an UserProvider');
  }

  return context;
}
