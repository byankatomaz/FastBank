import { Link } from 'react-router-dom';
import { Button } from 'components';
import Logo from '../../images/logo.png';
import { useAuth } from 'context';


type Props = {
  children?: React.ReactNode;
}

export function Header({ children }: Props) {
  const { accessToken, logout } = useAuth();

  return (
    <nav className="header">
      <div className="w-full h-full m-auto flex items-center justify-between">
        <img src={Logo} alt="Logo" />

        {accessToken ? ( // Se o usuário estiver autenticado
          <div className="flex items-center">
            <p className="mr-4 text-white">Bem-vindo, {children}</p>
            <Button onClick={logout}>Logout</Button>
          </div>
        ) : ( // Se o usuário não estiver autenticado
          <div className="flex justify-between items-center">
            <Link to="/signIn">
              <Button>LOGIN</Button>
            </Link>
            <Link to="/signUp">
              <Button variant="dark">ABRIR MINHA CONTA</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
