import React, { useState } from 'react'
import { FormGroup, Form, Container, FormControl, FormLabel, Col, Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './Citabarberia.css'
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';



const Citabarberia = () => {

    const navigate = useNavigate()

    const [barberia, setBarberia] = useState('')
    const [barbero, setBarbero] = useState('')
    const [fechaservicio, setFechaservicio] = useState('')
    const [horaservicio, setHoraservicio] = useState('')
    const [metodopago, setMetodopago] = useState('')

    const [validacion, setValidacion] = useState(false)

    let [listaMetodoPago, setListaMetodoPago] = useState([])
    let [listaBarberias, setListabarberias] = useState([])
    let [listaBarberos, setListabarberos] = useState([])

    let [validaciones, setValidaciones] = useState([])

    fetch('http://localhost:5000/admin/metodopago')
    .then(element => element.json())
    .then(datos =>{
        setListaMetodoPago(datos)
    })

    fetch('http://localhost:5000/admin/barberos')
        .then(element => element.json())
        .then(datos => {
            setListabarberos(datos)
        })

    fetch('http://localhost:5000/admin/sedes')
        .then(element => element.json())
        .then(datos => {
            setListabarberias(datos)
        })

    const submithandler = (e) => {
        let validationMessage = []
        e.preventDefault()
        let fecha = new Date(fechaservicio)
        let fechaoficial = '' + fecha.toLocaleDateString('en-CA')+''
        console.log(fechaoficial);
        let fechaActual = new Date()
        let formulario = e.currentTarget;
        if (
            formulario.checkValidity() === false) {
            setValidacion(false)
            e.stopPropagation()
        } else {
            setValidacion(true)
        }


        if (fecha < fechaActual) {
            validationMessage.push('Seleccione una fecha valida a futuro')
            setValidacion(false)

        }

        if(barberia == ''){
            validationMessage.push('Seleccione una barberia')
        }
        if(barbero == ''){
validationMessage.push('Seleccion un barbero')
        }
        if(fechaservicio == ''){
            validationMessage.push('Seleccione una fecha')
        }
        if(horaservicio == ''){
            validationMessage.push('Seleccione una hora')
        }
        if(metodopago == ''){
            validationMessage.push('Seleccion un metodo de pago')
        }
        setValidaciones(validationMessage)

        if (validacion === true) {


            let inputMapping = {
                'id': null,
                'fechaservicio': fechaoficial,
                'horaservicio': horaservicio,
                'metodopago': metodopago,
                'barbero': barbero,
                'sede': barberia,
                'descripcion': 'BARBERIA',
                'tiposervicio': 2,
                'idusuario': window.localStorage.getItem('id'),

            }

            fetch('http://localhost:5000/service',
                {
                    'method': 'POST',
                    'mode': 'cors',
                    'body': JSON.stringify(inputMapping),
                    'headers': {
                        "Content-Type": "application/json"
                    }
                }
            ).then(element=>element.json())
            .then(data=>{
                if (data.affectedRows === 1){
                    alert('Cita reservada con exito')
                    navigate('/inicio')
                }
            })

           
        }
    }



    return (

        <>
            <div className='citabarberia-container'>



                <Menu />;

                <div style={{
                    // display: 'flex',
                    // alignItems: 'center',
                    // alignContent: 'center',
                    // flexDirection: 'column'
                }}>

                    <div style={{
                        display: validacion == false ? '' : 'none',
                        color: 'red',
                        backgroundColor: 'white',
                        position: 'absolute',
                        borderRadius: '5px',
                        padding: '10px 10px'

                    }}> {

                            validaciones.map(element => {
                                return (
                                    <h3>{element}</h3>
                                )
                            })

                        }</div>

                </div>

                <Container className='contenedor-contenido-ppal-barberia'>
                    <h1>Solicitud de servicio de barberia</h1>
                    <Form className='form' onSubmit={submithandler} validated={validacion} noValidate>
                        <FormGroup className='mb-5' controlId='barberiacontroller'>
                            <Row>
                                <Col>
                                    <FormLabel>Seleccione su barberia</FormLabel>
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example" required value={barberia} onChange={(e) => { setBarberia(e.currentTarget.value) }}>
                                        <option value=''>Seleccione su barberia</option>
                                        {
                                            listaBarberias.map(element=>{
                                                return(
                                                <option value={element.idsede}>{element.nombresede}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Selecciona una barbaria.
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </FormGroup>



                        <br />

                        <FormGroup className="mb-3" controlId='barberocontroller'>
                            <Row>
                                <Col>
                                    <FormLabel>Seleccione su barbero</FormLabel>
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example" required value={barbero} onChange={(e) => { setBarbero(e.currentTarget.value) }}>
                                        <option value=''>Seleccione su barbero</option>
                                        {
                                            listaBarberos.map(element => {
                                                return (
                                                    <option value={element.idbarbero}>{element.nombrebarbero}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Selecciona un barbero.
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <br />
                        <br />

                        <Row>


                            {/* FECHA DE SERVICIO */}
                            <Col>
                                <FormGroup controlId='fechaserviciocontroller'>
                                    <FormLabel>Seleccione la fecha</FormLabel>
                                    <FormControl class='formcontrol' type='date' required value={fechaservicio} onChange={(e) => { setFechaservicio(e.currentTarget.value) }} />
                                    <Form.Control.Feedback type="invalid">
                                        Selecciona una fecha valida.
                                    </Form.Control.Feedback>
                                </FormGroup>
                            </Col>


                            {/* HORAS DISPONIBLES PARA EL SERVICIO */}
                            <Col>
                                <FormGroup controlId='horarioserviciocontroller'>
                                    <FormLabel>Seleccione las horas</FormLabel>
                                    <Form.Select aria-label="Default select example" required value={horaservicio} onChange={(e) => { setHoraservicio(e.currentTarget.value) }}>
                                        <option value=''>Seleccione su horario</option>
                                        <option value="1:00">1 PM</option>
                                        <option value="1:30">1:30 PM</option>
                                        <option value="2:00">2 PM</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Selecciona una hora valida.
                                    </Form.Control.Feedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col></Col>
                            <Col>
                                <FormGroup controlId='metodopagocontroller'>
                                    <FormLabel>Seleccione 'metodo de pago'</FormLabel>
                                    <Form.Select aria-label="Default select example" required value={metodopago} onChange={(e) => { setMetodopago(e.currentTarget.value) }}>
                                        <option value=''>Metodo de pago</option>
                                        {
                                            listaMetodoPago.map(element => {
                                                return (
                                                    <option value={element.idtipopago}>{element.descripcion}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Selecciona un metodo de pago.
                                    </Form.Control.Feedback>

                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Button variant="secondary" type='submit' size="lg" active>
                            Solicitar servicio
                        </Button>

                    </Form>

                </Container>


            </div>

        </>

    )
}

export default Citabarberia