import React, { useState } from 'react'
import logo from './logo.png';
import './Registro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Registro = () => {



    const navigate = useNavigate()


    const [listaPelo, setListaPelo] = useState([])
    fetch('http://localhost:5000/admin/tipopelo')
        .then(element => element.json())
        .then(datos => {
            setListaPelo(datos)
        })


    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState('')
    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [pelo, setPelo] = useState('')
    const [validacion, setValidacion] = useState(false)
    let [validaciones, setValidaciones] = useState([])
    let [autorizacion, setAutorizacion] = useState(false)

    const submithandler = (e) => {
        e.preventDefault()
        console.log(autorizacion);
        let formulario = e.currentTarget;
        var patternName = /^[A-Za-z]{4,30}$/
        var patternCorreo = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

        let validationMessage = []
        if (!patternCorreo.test(correo)) {
            validationMessage.push('El correo es invalido')
        }
        if (!patternName.test(nombre)) {
            validationMessage.push('El nombre contiene numeros')
        }
        if (clave == '') {
            validationMessage.push('La contraseña esta vacia')
        }
        if (celular == '') {
            validationMessage.push('El celular esta vacio')
        }
        if (pelo == '') {
            validationMessage.push('Seleccione tipo de pelo')
        }
        if( autorizacion == false){
            validationMessage.push('Acepte el tratamiento de datos')
        }
        setValidaciones(validationMessage)

        if (
            formulario.checkValidity() === false || validaciones.length != 0 ) {

            setValidacion(false)


        } else {

            setValidacion(true)
            console.log('paso por este lado else');

            var jsonString = {
                "name": `${nombre}`,
                "email": `${correo}`,
                "phone": `${celular}`,
                "password": `${clave}`,
                "tipopelo": `${pelo}`,
                "tipousuario": 2,
            }


            fetch('http://localhost:5000/registro/', {
                'method': 'POST',
                'mode': 'cors',
                'body': JSON.stringify(jsonString),
                'headers': {
                    "Content-Type": "application/json"
                }
            }).then(
                (items) => {
                    console.log(items);
                    if (items.status >= 404) {
                        console.log("error");
                    }
                    else {
                        console.log(items);
                        return items.json()
                    }
                }
            ).then(
                (data) => {
                    console.log(data);
                    if (data.affectedRows === 1) {

                        navigate('/')
                    }else{
                        setValidacion(false)
                        validationMessage.push('El usuario ya esta registrado')
                        setValidaciones(validationMessage)
                    }
                }
            )

        }
    }



    return (
        <div className='fondo'>
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

            <div className="container2" >
                <form className="form-control1" method='POST' action='/' onSubmit={submithandler} validated={validacion} noValidate>
                    <img className="mb-4" src={logo} width="150" height="150" />
                    <h1 className="h3 mb-3 fw-normal"><font><font >¡Registrate!</font></font></h1>

                    <div >

                        <input name='email' class='input' type="email" placeholder="TuCorreo@ejemplo.com" required value={correo} onChange={(e) => { setCorreo(e.currentTarget.value) }} />

                    </div>
                    <div >

                        <input name='nombre' class='input' type="text" placeholder="Nombre" required pattern="[A-Za-z]{4,30}" value={nombre} onChange={(e) => { setNombre(e.currentTarget.value) }} />

                    </div>

                    <div >

                        <input name='celular' class='input' type="text" placeholder="Celular" required pattern="[0-9]{10}" value={celular} onChange={(e) => { setCelular(e.currentTarget.value) }} />

                    </div>
                    <div className="form-floating">
                        <input name='pass' class='input' type="password" placeholder="Password" required value={clave} onChange={(e) => { setClave(e.currentTarget.value) }} />
                    </div>

                    <div className="form-floating">
                        <div className="col-sm-12">
                            <select name='tipopelo' required value={pelo} onChange={(e) => { setPelo(e.currentTarget.value) }} >
                                <option selected value=''>Selecciona tú tipo de pelo</option>
                                {
                                    listaPelo.map(element => {
                                        return (
                                            <option value={element.idtipopelo}>{element.descripcion}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>


                    <div class='checkbox'>
                        <input name='accept' className="form-check-input" type="checkbox" value={autorizacion} onChange={(e)=>{ setAutorizacion(e.currentTarget.checked);}} />
                        <label className="form-check-label" >
                            ¿Autoriza el tratatmiento de datos?
                        </label>
                    </div>


                    <div>
                        <button type="submit" className="btn btn-light" active>Terminar registro</button>
                    </div>
                    <br>
                    </br>
                    <div>
                        <Link to={'/'}>
                            ¿Ya tienes cuenta?
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Registro;

