import React from "react";

// import Soldado from "./Soldado";
import SoldadoClase from "./SoldadoClase";

const Principal = () => {
  return (
    <div>
      {/* <Soldado /> */}
      <SoldadoClase 
      fullName={{nombre:"Eduardo", apellido:"lulichac"}}
      edad={28}
      mayorDeEdad={true}
      
      />
    </div>
  );
};

export default Principal;
