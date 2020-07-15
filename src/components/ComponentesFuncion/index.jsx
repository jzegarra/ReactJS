import React from "react";

import FuncionTradicional from "./FuncionTradicional";
import FuncionModerna from "./FuncionModerna";

const ComponentesFuncion = () => {
  return (
    <>
      <h1>Componentes de tipo función en carpeta</h1>
      <p>soy un parrafo del componente funcion</p>
      <FuncionTradicional></FuncionTradicional>
      <FuncionModerna/>
    </>
  );
};

export default ComponentesFuncion;
