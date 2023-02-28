import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { Container, Row, div, FormControl,  Image, Button, Col} from 'react-bootstrap'
import './Barbershop.css'

const Barbershop = () => {


    const [productos, setProductos ] = useState([])

   fetch('http://localhost:5000/admin/productos')
   .then(element => element.json())
   .then(data =>{
        setProductos(data)
   })

    return (
        <div>
            <Menu />
            <Container className='container-store' fluid>
                <div>
                        <Row className='searchbar-container'>
                            <Col><h1>Productos</h1></Col>
                            <Col>
                                <FormControl type='text' />
                            </Col>
                        </Row>
                    
                    <br />
                    <br />
                    <div className='contenedorItems'>
                        {/* <div className='cardStore'>
                            <h1>Crema humectante</h1>
                            <Image src={require('./imgs/1648661092-41qW9Ji7zYL._SL500_.jpg')} width='350px' rounded height='350px' />
                            <br />
                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Crema exfoliante</h1>
                            <Image src={require('./imgs/20012617-01.jpg')} width='350px' rounded height='350px' />
                            <br />
                            <Button type='button' >Agregar al carrito</Button>
                        </div > */}

                        {/* <div className='cardStore'>
                            <h1>Gorras</h1>
                            <Image src={require('./imgs/470f0b266ffc42c40dcf4825aa90997d.jfif')} width='350px' height='350px' rounded />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Cera de peinar</h1>
                            <Image src={require('./imgs/51tygtlcvfl-1547809907.jpg')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Mascarilla negra</h1>
                            <Image src={require('./imgs/D_NQ_NP_617092-MCO43733963800_102020-O.jpg')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Petos basketbal</h1>
                            <Image src={require('./imgs/download.jfif')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button'>Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Minoxidil</h1>
                            <Image src={require('./imgs/Minoxidil.jpg')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Camisa Oakley</h1>
                            <Image src={require('./imgs/oakley-0733-62451-1-product.webp')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Talco</h1>
                            <Image src={require('./imgs/7891010037246.webp')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div > */}

                        {/* <div className='cardStore'>
                            <h1>Gorras Fox</h1>
                            <Image src={require('./imgs/b345b574-f887-49b5-bcac-4719bbd90d12_8eef4b83-e8f3-43e1-b020-2.jpg')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button'>Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Lociones</h1>
                            <Image src={require('./imgs/D_NQ_NP_811270-MCO42747066963_072020-O.jpg')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}

                        {/* <div className='cardStore'>
                            <h1>Maquinas de afeitar</h1>
                            <Image src={require('./imgs/download (1).jfif')} width='350px' rounded height='350px' />
                            <br />

                            <Button type='button' >Agregar al carrito</Button>
                        </div> */}
                        {
                            productos.map(element => {
                                return(
                                    <div className='cardStore'>
                                        <h1>{element.nombreproducto}</h1>
                                        <Image src={require(`${element.imagen}`)} width='350px' rounded height='350px' />
                                        <br />

                                        <Button type='button' >Agregar al carrito</Button>
                                    </div>
                                )
                            })
                        }

                        
                    </div>
                        
                </div>
            </Container>
        </div>
    )
}

export default Barbershop