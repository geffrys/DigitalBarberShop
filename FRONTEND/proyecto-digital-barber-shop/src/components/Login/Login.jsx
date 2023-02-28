import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';

const Login = () => {


  const navigate = useNavigate()

  const [Usuario, setUsuario] = useState('')
  const [Password, setPassword] = useState('')
  //const [validacion, setValidacion] = useState(false)

  const submithandler = (e) => {
    e.preventDefault()
    if (Usuario != "" && Password != "") {
      var jsonString = {
          "email": `${Usuario}`,
          "password": `${Password}`,
      }
      console.log(JSON.stringify(jsonString));

   
        fetch('http://localhost:5000/login/', {
          'method': 'POST',
          'mode': 'cors',
          'body': JSON.stringify(jsonString),
          'headers': {
            "Content-Type": "application/json"
          }
        })
        .then(element=>{
          return element.json()
        })
        .then(data=>{
          console.log(data);
          if(data.length==1){
            window.localStorage.setItem('id', data[0].idusuario)
            navigate('/inicio')
          }else{
            alert('Credenciales incorrectas')
          }
        })
      //   .then(items =>{
      //     console.log(items);
      //     if(items.status>=404){
      //       console.log("error");
      //     }
      //     else{
      //       console.log(items);
      //       return items.json()
      //     }
      //   }).then(data => {
      //     console.log(data);
      //       if (data.usuario.length == 1) {
 
      //       }
      //   })
      //   .then(datos => {
      //     console.log(datos.usuario);
      //   })
      //   .catch(err=>console.log(err))
      // } catch (error) {
      //   console.log(error);
      // }
      
    }
    /*if (Usuario) {
      setValidacion(false)      
  }*/
  }


  return (
    <div className='body'>
      <div className="wrapper1">
        <div className="container1">
          <img src={Logo} width='150px'></img>
          <h1>¡Ingresa ahora! </h1>
          <form className="form" onSubmit={submithandler} >
            <input class='login' type="email" placeholder="Correo" required value={Usuario} onChange={(e) => { setUsuario(e.currentTarget.value) }} />
            <input class='login' type="password" placeholder="Contraseña" required value={Password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button class='buttom' type="submit" active>Ingresar</button>
          </form>
          <Link to={'/registro'}>
            Haz click aqui para registrarte
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;