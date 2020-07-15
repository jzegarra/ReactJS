import React from "react";

const Persona = ({ nombre, edad }) => {
  return (
    <div>
      <p>
        Mi nombre es: <strong>{nombre}</strong>
      </p>
      <p>
        Mi edad es: <strong>{edad}</strong>
      </p>
    </div>
  );
};

export default Persona;
