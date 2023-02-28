import React from 'react';
import './Footer.css';
import Instagram from './instagram.png';
import Facebook from './facebook.png';
import { Container } from 'react-bootstrap';

const Footer = () => {
   
    return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"></svg>
                </a>
                <span className="text-white">© DigitalBarberShop</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a href="https://www.youtube.com/watch?v=A1OqtIqzScI"><img src={Instagram} width='40px'></img><svg className="bi" width="24" height="24"></svg></a></li>
                <li className="ms-3"><a href="https://www.youtube.com/watch?v=0J2QdDbelmY"><img src={Facebook} width='40px'></img><svg className="bi" width="24" height="24"></svg></a></li>
                
                </ul>
            </footer>
    ) 
}

export default Footer;