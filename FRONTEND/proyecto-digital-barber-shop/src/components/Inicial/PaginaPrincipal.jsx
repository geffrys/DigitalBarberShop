import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link, renderMatches, useParams } from 'react-router-dom'
import './PaginaPrincipal.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';


// import Card from './components/Card'



const PaginaPrincipal = () => {
   
    return (      
        
        <div className='bloque-pagina-principal'>
            <Menu />
            <Container className= 'containerppl'>
                <Row>
                    <Col />
                    <Col 
                     className='Card'>
                        <h2>Servicio de barberia</h2>
                        <Link to={'/citaBarberia'}>
                            <Image src={require('./imgs/barberia.jpg')} rounded width='350px' height='350px' />
                        </Link>
                    </Col>
                    <Col />

                    <Col className='Card'>
                        <h2>Servicio de Spa</h2>
                        <Link to={'/citaSpa'}>
                            <Image src={require('./imgs/servicioSpa.jpeg')} rounded width='350px' height='350px' />
                        </Link>
                    </Col>
                    <Col />
                 
                     <Col className='Card'>
                        <h2>BarberShop</h2>
                        <Link to='/barbershop'>
                            <Image src={require('./imgs/TiendaBarberia.jpg')} rounded width='350px' height='350px' />
                        </Link>
                    </Col>                   
                   
                    <Col />

                </Row>
            </Container>
        </div>
    )
}

export default PaginaPrincipal