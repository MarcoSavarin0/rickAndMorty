import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Menu (){
return(
    <>
      <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">Rick & Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/personajes">Personajes</Nav.Link>
            <Nav.Link as={Link} to="/buscar">Buscar tu personaje</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contactame</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
)
}

export default Menu