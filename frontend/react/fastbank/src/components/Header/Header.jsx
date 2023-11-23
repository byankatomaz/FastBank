import { HeaderTopo } from "./styles"
import { Link } from "react-router-dom";
import { ButtonCreateAccount } from "../Buttons/styles"
import Logo from '../../images/logo.png'

function Header() {
  return (
    <HeaderTopo>
        <img src={Logo} />
        <Link to={'/signup'}><ButtonCreateAccount>ABRIR MINHA CONTA</ButtonCreateAccount></Link>
    </HeaderTopo>
  )
}

export default Header