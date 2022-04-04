import React from "react";

import { useState } from "react";
// import { OyeRegistro } from './OyeRegistro';

function OyeInput ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}){
  
  const [estilos, setEstilos] = useState({clase: "", id:"no_ayudar"});  

  const onChange = (e) => {    
		cambiarEstado({...estado, campo: e.target.value});
	}
  
  
  const validacion = (e) => {    
    if(expresionRegular.test(estado.campo)){        
      cambiarEstado({...estado, valido : 'true'});
      setEstilos({id:"no_ayudar", clase:"is-valid"});
    } else {        
      cambiarEstado({...estado, valido : 'false'});
      setEstilos({id:"ayudar", clase:"is-invalid"});
    }
    if(funcion){
      funcion();
    }      
	}   
  
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>{label}</label>      
      <input 
      type={tipo}
      placeholder={placeholder}
      value={estado.campo}
      className={`form-control ${estado.campo.length > 0 && estilos.clase}`} 
      
      id={name}
      onChange={onChange}
      onKeyUp={validacion}
      onBlur={validacion}
      valido={estado.valido}     
      />
    {estado.campo.length > 0 &&
      
      <div id={estilos.id} className="form-text">{leyendaError}</div>
    }

    </div>
  );
}

export { OyeInput };