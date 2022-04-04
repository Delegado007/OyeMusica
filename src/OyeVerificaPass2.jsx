import React from "react";

function OyeVerificaPass2({
  estado,
  tipo,
  label,
  name,
  leyendaError,
  cambiarEstado,
  funcion
}) {
  let clase = "";
  let id = "no_ayudar";
  //actualizar valor de password2
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };
  //actualizar valor de valido en password2
  const validar = () => {
    funcion();
  };
  //asignar id y clases para estilos de validación
  if (estado.valido === null) {
    id = "no_ayudar";
  }
  if (estado.valido === "true") {
    clase = "is-valid";
  }
  if (estado.valido === "false") {
    id = "ayudar";
    clase = "is-invalid";
  }

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={tipo}
        value={estado.campo}
        className={`${clase} form-control`}
        id={name}
        onChange={onChange}
        onKeyUp={validar}
        onBlur={validar}
      />
      <div id={id} className="form-text">
        {leyendaError}
      </div>
    </div>
  );
}

export { OyeVerificaPass2 };
