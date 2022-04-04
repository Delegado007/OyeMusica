import React from "react";
import { OyeHeader } from "./OyeHeader";
import { OyeFooter } from "./OyeFooter";
import { OyeInput } from "./OyeInput";
import { useState } from "react";
import { OyeVerificaPass2 } from "./OyeVerificaPass2";
import { OyeImputEdad } from "./OyeImputEdad";
import { useLocalStorage } from "./useLocalStorage";

function OyeRegistro(
  logueado,
  setLogueado
) {
  const localStorageUsuarios = localStorage.getItem('Usuarios_v1');
  let localUsuarios;
  if(!localStorageUsuarios) {
    localStorage.setItem('Usuarios_v1', JSON.stringify([]));
    localUsuarios = [];
  } else {
    try {
      localUsuarios = JSON.parse(localStorageUsuarios);
    }catch (error) {
      console.log(error)
    }
  }
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [edad, setEdad] = useState({valor:"", valido: false});  
  const [terminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(null);
  const [idAyudar, setIdAyuda] = useState("no_ayudar");
  const [cargarUsuario, setCargarUsuario] = useState([]);
  const [datos, setDatos] = useLocalStorage('Usuarios_v2', "[]");
  

  const expresiones = {
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, // min 8 caracteres, debe contener un número, debe contener una letra.
    correo: /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  }; 
  
  // valida password 2
  const validarPassword2 = () => {
    if (password2.campo.length > 0) {
      if (password.campo.length > 0) {
        if (password.campo !== password2.campo) {
          cambiarPassword2({ ...password2, valido: "false" });
        } else {
          cambiarPassword2({ ...password2, valido: "true" });          
        }
      }
    } else {
      cambiarPassword2({ ...password2, valido: false });
    }
  };

  const cambiarTerminos = (e) => {
    setTerminos(e.target.checked);
  };
  
  onsubmit = (e) => {
    e.preventDefault();

    if (
      usuario.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      edad.valido === true &&
      terminos
    ) {
      setCargarUsuario([cargarUsuario.push(usuario.campo), cargarUsuario.push(password.campo)])
      setFormularioValido(true);
      cambiarUsuario({ campo: "", valido: null });
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: null });
      setEdad({valor:"", valido: null});
      setTerminos(false);      
      setIdAyuda("no_ayudar")
      
      cargarDatos ()
      
    } else {
      setFormularioValido(false);      
      setIdAyuda("idErrorForm");
    }
    
  };
  const cargarDatos = function () {
    
    setDatos('Usuarios_v2', JSON.stringify(cargarUsuario));
    console.log(localUsuarios)
    localUsuarios.push(cargarUsuario)
    localStorage.setItem('Usuarios_v1', JSON.stringify(localUsuarios));
    setCargarUsuario([]);
  }

  return (
    <React.Fragment>
      <OyeHeader />
      <main>
        <div className="py-5">
          <div className="col-sm-9 col-lg-5 mx-auto px-2">
            <form className="text-white" id="formulario">
              <OyeInput
                estado={usuario}
                cambiarEstado={cambiarUsuario}
                tipo="email"
                label="Correo Electronico *"
                placeholder="abc@ejemplo.com"
                name="correo"
                leyendaError="El correo electrónico debe tener un @ y un dominio"
                expresionRegular={expresiones.correo}                
              />
              <OyeInput
                estado={password}
                cambiarEstado={cambiarPassword}
                tipo="password"
                label="Contraseña *"
                name="contraseña"
                leyendaError="La contraseña debe contener mínimo 8 caracteres y un número"
                expresionRegular={expresiones.password}
                
              />
              <OyeVerificaPass2
                estado={password2}
                cambiarEstado={cambiarPassword2}
                tipo="password"
                label="Verificar Contraseña *"
                name="contraseña2"
                leyendaError="Las contraseñas deben coincidir"
                funcion={validarPassword2}
              />
              <div className="mb-3">
                <label className="form-label">Edad *</label>
                <OyeImputEdad                  
                  edad={edad}
                  setEdad={setEdad}
                  id="mayor_20"
                  value="mayor a 20"
                  label="Mayor a 20" 
                                   
                />
                <OyeImputEdad                  
                  edad={edad}
                  setEdad={setEdad}
                  id="20_a_40"
                  value="20 a 40"
                  label="Entre 20 y 40"
                    
                />
                <OyeImputEdad                  
                  edad={edad}
                  setEdad={setEdad}
                  id="40_o_mas"
                  value="40 o mas"
                  label="Mayor a 40"                  
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={terminos}
                  onChange={cambiarTerminos}
                ></input>
                <label className="form-check-label">
                  Acepto los terminos de uso *
                </label>
              </div>
              <p id="campos_obligatorios">* Campos obligatorios</p>
              <div className="d-flex p-2 my-2 justify-content-center align-items-center formError" id={idAyudar}>
                Todos los campos deben ser completados correctamente            
              </div>
              
              <div className="row mx-auto">
                <button type="submit" className="btn btn-primary mx-auto" id="botonEnviar">
                  Enviar
                </button>
              </div>
              
              {formularioValido === true && <div className="d-flex p-2 my-2 justify-content-center align-items-center formSend">
                <p className="m-0">Datos Enviados!</p>
              </div>}
            </form>
          </div>
        </div>
      </main>
      <OyeFooter />
    </React.Fragment>
  );
}

export { OyeRegistro };
