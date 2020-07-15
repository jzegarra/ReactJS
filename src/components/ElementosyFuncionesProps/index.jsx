import React from "react";

import Estudiante from "./EstudianteClase";

const Principal = () => {
  const sumaNotas = (notasAlumno) => notasAlumno.reduce((a, i) => a + i);

  return (
    <div>
      <h1>Elementos y funciones como props</h1>
      <Estudiante
        titulo={<h2>soy El componente estudiante CLASE</h2>}
        nombre="Jose"
        notas={[13, 11, 17]}
        suma= {sumaNotas}
      />
    </div>
  );
};

export default Principal;
