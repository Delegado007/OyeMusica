import React from 'react';
import { OyeHeader } from './OyeHeader';
import { OyeFooter } from './OyeFooter';
import { useEffect } from 'react';
import { useState } from 'react';
import { OyeContext } from './OyeContext';

function OyeLogin () {
  const { Logueado } = React.useContext(OyeContext);
  const [users, setUsers] = useState([""])
  const [campoCorreo, setCampoCorreo] = useState({campo:"", valido: null})
  const [campoPassword, setCampoPassword] = useState({campo:"", valido: null})

   useEffect(() => {
    setUsers([JSON.parse(localStorage.getItem("Usuarios_v1"))])    
  },[])

  onsubmit = (e) => {
    e.preventDefault();
    let cont = 0;
    for (let a = 0; a < users.length; a++) {
      for (let x = 0; x < users[a].length; x++) {
        if (users[a][x][0].includes(campoCorreo.campo) && users[a][x][1].includes(campoPassword.campo)){
          let indice = campoCorreo.campo.indexOf("@");
          let trimUser = campoCorreo.campo.substring(0, indice);
          localStorage.setItem('Logueado_v1', JSON.stringify(trimUser));          
          setCampoCorreo({...campoCorreo, valido: true})

          setTimeout(() => {
            window.location = '/';
          }, 1300);          
          
        } else {
          cont = cont +1;          
          if (users[a].length === cont){
            setCampoCorreo({...campoCorreo, valido: false})
          }
        }        
      }
    }
  };
  
  return(
    <React.Fragment>
      <OyeHeader />
      <main>
        <div className="py-5">
          <div className="col-sm-6 col-lg-4 mx-auto px-2 text-white">
            <h2 className="text-center">Iniciar Sesión</h2>
            <hr></hr>
            <form>

              <div className="mb-3">
                <label className="form-label">Correo electronico</label>
                <input 
                  type="email" 
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  value={campoCorreo.campo}
                  onChange={(e) => {setCampoCorreo({...campoCorreo, campo: e.target.value});}}>
                </input>
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password1"
                  value={campoPassword.campo}
                  onChange={(e) => {setCampoPassword({...campoPassword, campo: e.target.value});}}>
                </input>
              </div>
              {campoCorreo.valido === false &&
                <div className="d-flex p-2 my-2 justify-content-center align-items-center formError">
                  Credenciales Incorrectas!          
                </div>
              }
              {campoCorreo.valido === true &&
                <div className="d-flex p-2 my-2 justify-content-center align-items-center formSend">
                  BIENVENIDO!!      
                </div>
              }
              
              <div className="d-flex p-2 my-2 justify-content-center">
                <button type="submit" className="btn btn-success ">Iniciar Sesion</button>
              </div>

            </form>
          </div>
        </div>
      </main>
      <OyeFooter />
    </React.Fragment>
  );
}

export { OyeLogin };