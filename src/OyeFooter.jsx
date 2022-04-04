import React from "react";

function OyeFooter (){

  return(
    <footer className="container-fluid py-1 bg-primary text-white fixed-bottom">
      <div className="row">
        <div className="col text-start">
          Comparte la música
        </div>
        <div className="col text-end">
          © Derechos reservados
        </div>
      </div>
    </footer>
  );
}

export { OyeFooter };