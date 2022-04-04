import React, { useEffect } from "react";
import { OyeBuscador } from "./OyeBuscador";
import { OyeApi } from "./OyeApi";
import { OyeHeader } from "./OyeHeader";
import { OyeFooter } from "./OyeFooter";
import { OyeContext } from './OyeContext';

function OyeMain() {  
  const {canciones, cargarJson} = React.useContext(OyeContext);
  const [buscar, setBuscar] = React.useState("");  

  useEffect(() => {
    cargarJson ();
  }, []);

  const localStorageLogueado = localStorage.getItem('Logueado_v1');
  let Logueado = "";
  if(!localStorageLogueado) {
    localStorage.setItem('Logueado_v1', JSON.stringify(Logueado));    
  } else {
    try {
      Logueado = JSON.parse(localStorageLogueado);
    }catch (error) {
      console.log(error)
    }
  }  
  
  let searchedCanciones = [];

  if (!buscar.length >= 1) {
    searchedCanciones = canciones;    
  } else {
    searchedCanciones = canciones.filter((canciones) => {
      const nombresCanciones = canciones.nombre.toLocaleLowerCase();
      const buscarMin = buscar.toLocaleLowerCase();
      return nombresCanciones.includes(buscarMin);
    });
  }

 
  return (
    <React.Fragment>
      <OyeHeader />
      <main>      
        <div className="py-5">
          <div className="col-sm-9 mx-auto">
            <OyeBuscador valor={buscar} setBuscar={setBuscar} />
            <div className="d-flex flex-wrap justify-content-center">
              {searchedCanciones.map((canciones) => (
                <OyeApi
                  key={canciones.nombre}
                  nombre={canciones.nombre}
                  ruta={canciones.ruta}
                  icono={canciones.icono}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <OyeFooter />
    </React.Fragment>
  );
}

export { OyeMain };
