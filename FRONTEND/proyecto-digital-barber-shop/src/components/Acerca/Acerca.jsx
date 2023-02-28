import React from 'react'
import { Row, Col, Image, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Acerca.css'
import Menu from '../Menu/Menu'

const Acerca = () => {
  return (
    <div className='contenedor-principal-acerca'>
          <Menu />
          <Container className='containerppl'>
                <Row>
    <h1>Digital Barber Shop</h1>
    <p>
        Somos una startup que busca el crecimiento del sector de belleza masculino, por medio de una aplicacion que nos permita acceder a los servicios mas solicitados por los hombres, de manera facil, rapida y segura, teniendo la facilidad de acceder a estos desde cualquier lugar donde se encuentre, a traves de su smartphone o cualquier dispositivo con acceso a internet que se lo permita
    </p>

                </Row>
              <Row>
                  <Col />
                  <Col
                      className='Card'>
                      <h2>Daniel Hernandez Melo</h2>
                      <Link to={'www.facebook.com'}>
                          <Image src={require('./imgs/Daniel.PNG')} rounded width='350px' height='350px' />
                      </Link>
                  </Col>
                  <Col />

                  <Col className='Card'>
                      <h2>Geffry Alejandro Ospina</h2>
                      <Link to={'www.facebook.com'}>
                          <Image src={require('./imgs/Geffry.PNG')} rounded width='350px' height='350px' />
                      </Link>
                  </Col>
                  <Col />

                  <Col className='Card'>
                      <h2>Andres Felipe Rivera</h2>
                      <Link to='www.facebook.com'>
                          <Image src={require('./imgs/Andres.PNG')} rounded width='350px' height='350px' />
                      </Link>
                  </Col>

                  <Col />

              </Row>
          </Container>
    </div>
  )
}

export default Acerca