import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.css'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';





const Menu = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#40302B'}} expand="lg" >
        <Container fluid="md" >
          <Row>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <NavDropdown title={<div className='menu-items-contenedor'>
              <Image src={require('./imgs/logo.png')} width="60px" height="60" alt="Logo" circle />
            </div>} id="navbarScrollingDropdown" className='imgAnimation'>
              <NavDropdown.Item as={Link} to="/inicio">Inicio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/perfil'>Perfil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/acerca'>Acerca de</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Salir</NavDropdown.Item>
            </NavDropdown>
          </Row>
          <Row>
            <h1 className='menu-title'>DigitalBarberShop</h1>
          </Row>
          <Row>

          </Row>
        </Container>
      </Navbar>

    </>
  )
}

export default Menu