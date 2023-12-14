import {Container, Image, Icon} from './NavbarStyled'
import logo from '../assets/logo.png'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
  return (
    <Container>
      <Image src={logo} />
      <Icon><a href="https://matheusariza.com/"><IoIosCloseCircleOutline/></a></Icon>
    </Container>
  )
}

export default Navbar