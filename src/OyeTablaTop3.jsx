import React from "react";
import { OyeContext } from './OyeContext';

function OyeTablaTop3 ({reproducciones}){
  const {canciones, cargarJson} = React.useContext(OyeContext);
  canciones.sort((a,b) => b.reproducciones - a.reproducciones);  
  return(
    <div className="col">
      <table className="table table-dark table-striped">                  
        <thead>
          <tr>
            <th colSpan={2}>
              <h2 className="text-center">TOP 3</h2>
            </th>
          </tr>                                   
        </thead>                
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Canción</th>   
          </tr>
          <tr>
            <td>{canciones[0].nombre}<br></br>{canciones[0].reproducciones} Reprod.</td>
            <td>
              <audio src={canciones[0].ruta} controls></audio>
            </td>
          </tr>
          <tr>
            <td>{canciones[1].nombre}<br></br>{canciones[1].reproducciones} Reprod.</td>
            <td>
              <audio src={canciones[1].ruta} controls></audio>
            </td>
          </tr>
          <tr>
            <th>{canciones[2].nombre}<br></br>{canciones[2].reproducciones} Reprod.</th>
            <td>
              <audio src={canciones[2].ruta} controls></audio>
            </td>                    
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export {OyeTablaTop3};