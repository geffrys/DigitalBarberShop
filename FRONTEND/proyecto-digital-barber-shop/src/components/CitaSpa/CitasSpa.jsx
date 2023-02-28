import React, { useState } from 'react'
import { FormGroup, Form, Container, FormControl, FormLabel, Col, Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './CitasSpa.css'
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const CitasSpa = () => {
  const navigate = useNavigate()

  const [servicio, setServicio] = useState('')
  const [lugar, setLugar] = useState('')
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
    .then(datos => {
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
    e.preventDefault()
    let fecha = new Date(fechaservicio)
    let fechaoficial = '' + fecha.toLocaleDateString('en-CA') + ''
    let fechaActual = new Date()
    let formulario = e.currentTarget;
    let validationMessage = []
    if (
      formulario.checkValidity() === false) {
      setValidacion(false)
      e.stopPropagation()
    } else {
      setValidacion(true)
    }


    if (fecha < fechaActual) {
      setValidacion(false)
      validationMessage.push('Seleccione una fecha valida, futura')
    }
    if(servicio == ''){
validationMessage.push('Seleccion el servicio a solicitar')
    }
    if(lugar == ''){
      validationMessage.push('Seleccione la sede en donde se lo realizara')
    }
    if(fechaservicio == ''){
      validationMessage.push('Seleccione la fecha del servicio')
    }
    if(horaservicio == ''){
      validationMessage.push('Seleccion la hora del servicio')
    }
    if(metodopago == ''){
      validationMessage.push('Seleccion el metodo de pago')
    }
    setValidaciones(validationMessage)

    if (validacion === true) {


      let inputMapping = {
        'id': null,
        'fechaservicio': fechaoficial,
        'horaservicio': horaservicio,
        'metodopago': metodopago,
        'barbero': 0,
        'sede': lugar,
        'descripcion': servicio,
        'tiposervicio': 1,
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
      )
        .then(items => {
          console.log(items);
          if (items.status >= 404) {
            console.log("error");
          }
          else {
            console.log(items);
            return items.json()
          }
        }).then(data => {

          if (data.affectedRows === 1) {
            alert('Se realizo la reserva correctamente')
            navigate('/inicio')
          }
        })

    }
  }

  return (
    <div className='citaspa-container'>
      <Menu />


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



      <Container className='contenedor-cita-spa'>
        <h1>Solicitud de servicio de barberia</h1>
        <Form style={{
          marginTop: '50px'
        }} onSubmit={submithandler} validated={validacion} noValidate>

          <FormGroup className='mb-5' controlId='servicio-controller'>
            <Row>
              <Col>
                <FormLabel>Seleccione su servicio</FormLabel>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example" required value={servicio} onChange={(e) => { setServicio(e.currentTarget.value) }}>
                  <option value=''>Seleccione su servicio</option>
                  <option value="MASAJE-SUECO">Masaje sueco</option>
                  <option value="EXFOLIACION-FACIAL">Exfoliacion con cafe</option>
                  <option value="LIMPIEZA-FACIAL">Limpieza facial</option>
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
                <FormLabel>Seleccione su lugar</FormLabel>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example" required value={lugar} onChange={(e) => { setLugar(e.currentTarget.value) }}>
                  <option value=''>Seleccione su sede</option>
                  {
                    listaBarberias.map(element => {
                      return (
                        <option value={element.idsede}>{element.nombresede}</option>
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
                <FormControl type='date' required value={fechaservicio} onChange={(e) => { setFechaservicio(e.currentTarget.value) }} />
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


  )
}

export default CitasSpa