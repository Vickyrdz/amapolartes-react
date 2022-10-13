import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#299190", color:"white"}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><b>Amapolartes</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{color: "white" }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Productos</b> 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/category/mate" className="dropdown-item">Mates</Link></li>
                  <li><Link to="/category/combo" className="dropdown-item">Combo</Link></li>
                </ul>
            </li> */}
            <li className="nav-item"><Link to="/category/mate" className="nav-link active">Mates</Link></li>
            <li className="nav-item"><Link to="/category/combo" className="nav-link active">Combo</Link></li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#"><b>Servicios</b></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#"><b>Instructivos</b></a>
            </li><li className="nav-item">
                <a className="nav-link active" aria-current="page"style={{color:"white"}} href="#"><b>Contacto</b></a>
            </li>
          </ul>
          <CartWidget />
       </div>
      </div>
    </nav>
  ); 
};

export default Navbar;