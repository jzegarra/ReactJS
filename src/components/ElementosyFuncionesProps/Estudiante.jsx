import React from "react";

const Estudiante = (props) => {
  const promedio = props.suma(props.notas) / props.notas.length;

  return (
    <div>
      {props.titulo}
      <p>mi nombre es: {props.nombre}</p>
      <p>mis notas son {props.notas.join(", ")}</p>
      <p>El promedio es: {promedio}</p>
    </div>
  );
};

export default Estudiante;
