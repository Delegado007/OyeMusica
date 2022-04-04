import React from "react";

function OyeImputEdad({
  setEdad,
  edad,
  id,
  value,
  label  
}) {
  const cambiarEdad = (e) => {
    setEdad({...edad, valor:e.target.value, valido: e.target.checked});    
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={id}
        value={value}                    
        
        onChange={cambiarEdad}
      ></input>
      <label className="form-check-label">{label}</label>
    </div>
  );
}

export { OyeImputEdad };
