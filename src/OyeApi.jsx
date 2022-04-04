import React from "react";
import logo1 from './imagenes/icon_1.svg'
import logo2 from './imagenes/icon_2.svg'
import logo3 from './imagenes/icon_3.svg'
import logo4 from './imagenes/icon_4.svg'

function OyeApi ({ruta, nombre, icono}){
  let logoMostrado = 1;
  switch (icono) {
    case 1:      
      logoMostrado=logo1
      break;
    case 2:     
      logoMostrado=logo2
      break;
    case 3:      
      logoMostrado=logo3
      break;
    case 4:      
      logoMostrado=logo4
      break;  
    default: logoMostrado=logo1
      break;
    }

  return (           
    <div className="row text-center">
      <div className="d-flex flex-wrap justify-content-center" id="cartas">
        <div className="card mx-2 my-2 shadow" id="targeta">
          <div className="card-header">
            <img src={logoMostrado} className="card-img-top" alt="cancion" ></img>
          </div>
          <div className="card-body">
            <p className="card-text">{nombre}</p>
            <audio src={ruta} controls></audio>
          </div>
        </div>
      </div>
    </div>       
    );
 }

export { OyeApi };