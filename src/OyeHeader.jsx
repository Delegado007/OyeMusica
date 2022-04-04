import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { OyeContext } from './OyeContext';
import logo_svg from './imagenes/kabeers-music.svg';
import { OyeModalContacto } from './OyeModalContacto';

function OyeHeader() {
  const { Logueado } = React.useContext(OyeContext);
  const logOut = () => {
    localStorage.removeItem('Logueado_v1');
    window.location = '/';
  }

  return (
    <header>
      <OyeModalContacto />
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-header me-3">
            <NavLink to="/">
              <img src={logo_svg} alt="logo" id="header-logo"></img>
            </NavLink>
          </div>
          <NavLink className="navbar-brand" to="/">OYE!</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#barra" aria-controls="barra" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="barra">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/OyeCanciones" className="nav-link" >
                  Canciones
                </NavLink>
              </li>
            </ul>
            {Logueado.length < 1 
            ? <ul className="navbar-nav">
                <li className="nav-item my-auto me-2 mb-2">                  
                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Contacto</button>
                </li>
                <li className="nav-item">
                  <NavLink to="/OyeLogin" className="nav-link">
                    <button type="button" className="btn btn-info">Log In</button>                    
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/OyeRegistro" className="nav-link">
                    <button type="button" className="btn btn-success">Registro</button>
                  </NavLink>
                </li>
              </ul>
            : <ul className="navbar-nav text-white ">
                <li className="nav-item my-auto">
                  <button type="button" className="btn btn-info me-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Contacto</button>
                </li>
                <li className="nav-item my-auto me-2 py-2">
                  {Logueado}
                </li>
                <li className="nav-item my-auto">
                  <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={logOut}>
                      Log Out
                  </button>
                </li>               
              </ul>}
          </div>
        </div>
      </nav>
    </header>
  );
}

export { OyeHeader };