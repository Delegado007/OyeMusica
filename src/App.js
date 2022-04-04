import React from "react";
import { OyeMain } from "./OyeMain";
import { OyeRegistro } from "./OyeRegistro";
import { OyeInicio } from "./OyeInicio";
import { OyeLogin } from "./OyeLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OyeProvider } from './OyeContext';
 

function App() { 

  return (
    <OyeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="OyeCanciones" element={<OyeMain />} />
          <Route path="OyeRegistro" element={<OyeRegistro />} />
          <Route path="OyeLogin" element={<OyeLogin />} />
          <Route path="/" element={<OyeInicio />} />
        </Routes>
      </BrowserRouter>
    </OyeProvider>
  );
}

export default App;
