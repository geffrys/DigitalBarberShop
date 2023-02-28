import React, { useState } from 'react'
import './Historial.css'
import { Container, Row, Col, Table, FormControl, FormLabel, Image, FormSelect, Button } from 'react-bootstrap'
import Menu from '../Menu/Menu'

const Historial = () => {

    let [nombre, setNombre] = useState('')
    let [correo, setCorreo] = useState('')
    let [pelo, setPelo] = useState('')
    let [celular, setCelular] = useState('')
    let [clave, setClave] = useState()
    let [listaBarberia, setListabarberia] = useState([])


    var inputUsuario = {
        'id': window.localStorage.getItem('id')
    }

    // const preparationTableData = () => {



    //     fetch('http://localhost:5000/service/service', {

    //         'method': 'POST',
    //         'mode': 'cors',
    //         'body': JSON.stringify(inputUsuario),
    //         'headers': {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     )
    //         .then(items => {
    //             console.log(items);
    //             if (items.status >= 404) {
    //                 console.log("error");
    //             }
    //             else {
    //                 console.log(items);
    //                 return items.json()
    //             }
    //         }).then(data => {
    //             console.log(data.servicios);
    //             if (data.servicios.length > 0) {
    //                 setListabarberia(data.servicios)
    //             }
    //         })

    // }

    const actualizarInformacionPerfil = () => {

        let inputUsuarioInfo = {
            'id': window.localStorage.getItem('id'),
            'name': nombre,
            'email': correo,
            'phone': celular,
            'password': clave,
            'tipopelo': pelo,
            'tipousuario': 2
        }

        fetch('http://localhost:5000/registro/actualizar',{
            'method': 'POST',
            'mode': 'cors',
            'body': JSON.stringify(inputUsuarioInfo),
            'headers': {
                "Content-Type": "application/json"
            }
        }).then(element => element.json())
        .then(data=>{console.log(data)
        if(data.affectedRows===1){
            alert('usuario actualizado con exito')
        }})

    }

    const [listaPelo, setListaPelo] = useState([])
    fetch('http://localhost:5000/admin/tipopelo')
        .then(element => element.json())
        .then(datos => {
            setListaPelo(datos)
        })


    const fetchInfo = () => {
        fetch('http://localhost:5000/login/id', {
            'method': 'POST',
            'mode': 'cors',
            'body': JSON.stringify(inputUsuario),
            'headers': {
                "Content-Type": "application/json"
            }
        })
            .then(items => {
                console.log(items);
                if (items.status >= 404) {
                    console.log("error");
                }
                else {
                    // console.log(items);
                    return items.json()
                }
            }).then(data => {
                // console.log(data);

                if (data.length == 1) {
                    setNombre(data[0].nombreusuario)
                    setCorreo(data[0].mailusuario)
                    setCelular(data[0].telefonousuario)
                    setPelo(data[0].idtipopelo)
                    setClave(data[0].contrasenausuario)
                }
            })




        fetch('http://localhost:5000/service/service', {

            'method': 'POST',
            'mode': 'cors',
            'body': JSON.stringify(inputUsuario),
            'headers': {
                "Content-Type": "application/json"
            }
        }
        )
            .then(items => items.json())
            .then(data => {
                console.log(data);
                if (data.length != 0) {
                    setListabarberia(data)
                }
            })

    }

    
    
        

    


    return (
        <>
            <Menu />

            <div class='cuerpo'>

                <Button type='button' onClick={fetchInfo}>Refresh Data</Button>

                <Container className='contenedor-principal-historial'>
                    <h1>Perfil</h1>
                    <br />
                    {/* <Image src={require(imagen |"./imgs/hombre-calvo-con.jpg")} alt='aah' width='50px'/> */}
                    <br />
                    <Container>
                        <Row>

                            <Col>
                                <FormLabel>Nombre</FormLabel>
                            </Col>
                            <Col>
                                <FormControl type='text' value={nombre} onChange={(e) => { setNombre(e.currentTarget.value) }} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <FormLabel>Correo</FormLabel>
                            </Col>
                            <Col>
                                <FormControl type='text' value={correo} onChange={(e) => { setCorreo(e.currentTarget.value) }} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <FormLabel>Celular</FormLabel>
                            </Col>
                            <Col>
                                <FormControl type='number' value={celular} onChange={(e) => { setCelular(e.currentTarget.value) }} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <FormLabel>Tipo de cabello</FormLabel>
                            </Col>
                            <Col>
                                <FormSelect value={pelo} onChange={
                                    (e) => {
                                        setPelo(e.currentTarget.value)
                                    }}>
                                    <option selected value=''>Selecciona tú tipo de pelo</option>
                                    {
                                        listaPelo.map(element => {
                                            return (
                                                <option value={element.idtipopelo}>{element.descripcion}</option>
                                            )
                                        })
                                    }
                                </FormSelect>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <FormLabel>Contraseña</FormLabel>
                            </Col>
                            <Col>
                                <FormControl type='password' value={clave} onChange={(e) => { setClave(e.currentTarget.value) }} />
                            </Col>
                        </Row>
                        <Button type='button' onClick={actualizarInformacionPerfil}>Actualizar Informacion</Button>
                    </Container>
                    <br />
                    <h1>Historial de servicios</h1>
                    <br />
                    <Container>
                        <Table bordered responsive='sm' hover className='tabla-historial'>
                            <thead>
                                <tr>
                                    <td>Fecha</td>
                                    <td>Hora</td>
                                    <td>lugar/barberia</td>
                                    <td>servicio/barberia</td>
                                    <td>metodo de pago</td>
                                </tr>

                            </thead>
                            <tbody>

                                {
                                    listaBarberia.map(reserva => {
                                        return (
                                            <tr>
                                                <td>{reserva.fechaservicio}</td>
                                                <td>{reserva.horaservicio}</td>
                                                <td>{reserva.nombre_sede}</td>
                                                <td>{reserva.tipo_servicio}</td>
                                                <td>{reserva.metodo_pago}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {/* {
                                    listaSpa.map(reserva => {
                                        return (
                                            <tr>
                                                <td>{reserva.fechaservicio}</td>
                                                <td>{reserva.horaservicio}</td>
                                                <td>{reserva.lugar}</td>
                                                <td>{reserva.servicio}</td>
                                                <td>{reserva.metodopago}</td>
                                            </tr>
                                        )
                                    })
                                } */}

                            </tbody>

                        </Table>
                        {/* <Button type='button' onClick={preparationTableData}>fetch datatable</Button> */}
                    </Container>

                </Container>
            </div>
        </>

    )
}

export default Historial