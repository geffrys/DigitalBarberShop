import { Routes } from 'react-router-dom';
import './App.css';
import PaginaPrincipal from './components/Inicial/PaginaPrincipal';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Citabarberia from './components/CitaCorte/Citabarberia';
import { useState } from 'react';
import CitasSpa from './components/CitaSpa/CitasSpa';
import Barbershop from './components/Tienda/Barbershop';
import Footer from './components/Footer/Footer';
import Historial from './components/HistorialComprasPerfil/Historial';
import Registro from './components/Registro/Registro';
import Acerca from './components/Acerca/Acerca';

function App() {
  const [reservasBarberia, setListaReservasBarberia] = useState([])
  const [reservasSpa, setListaReservasSpa] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Login/>} />
        <Route path='/inicio' element={<PaginaPrincipal />} />
        <Route path='/citaBarberia' element={<Citabarberia setlista={setListaReservasBarberia} />} />
        <Route path='/citaSpa' element={<CitasSpa setlista={setListaReservasSpa} />} />
        <Route path='/barbershop' element={<Barbershop/>}/>
        
        <Route path='/registro' element={ <Registro />} />
        <Route path='/perfil' element={ <Historial listaBarberia={reservasBarberia} listaSpa={reservasSpa} />}/>
        <Route path='/acerca' element={<Acerca/>}/>
      </Routes>
      <Footer />
      <br></br>
    </div>
  );
}

export default App;
