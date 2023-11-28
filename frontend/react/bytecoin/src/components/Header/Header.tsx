import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'components';
import Logo from '../../images/logo.png';
import { useAuth, useUser } from 'context';


type Props = {
  children?: React.ReactNode;
  enable: boolean;
}

export function Header({ children, enable }: Props) {
  const { accessToken, setAccessToken } = useAuth();
  const { setDataUser } = useUser();

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    setDataUser(null);

    navigate('/home')
  };

  return (
    <nav className="header">
      <div className="w-full h-full m-auto flex items-center justify-between">
        <Link to={'/home'}><img src={Logo} alt="Logo" /></Link>

        {accessToken ? (
          <div className="flex items-center">
            <p className="mr-4 text-white">Bem-vindo, {children}</p>
            <Button onClick={logout}>Logout</Button>
          </div>
        ) : (
          enable === true ? (
            <div className="flex justify-between items-center">
              <Link to="/signIn">
                <Button>LOGIN</Button>
              </Link>
              <Link to="/signUp">
                <Button variant="dark" className="h-20">ABRIR MINHA CONTA</Button>
              </Link>
            </div>
          ) : (
            ""
          )
          
        )}
      </div>
    </nav>
  );
}
