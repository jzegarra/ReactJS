import React from "react";
import PropTypes from 'prop-types';

class SoldadoClase extends React.Component {
  render() {
    const { fullName, edad, mayorDeEdad, sexo } = this.props;
    return (
      <div>
        <p>
          Nombre completo: {fullName.nombre} {fullName.apellido}
        </p>
        <p>edad: {edad}</p>
        <p>sexo: {sexo}</p>
        <p>
          usted{" "}
          {mayorDeEdad ? "esta listo para servir" : "no esta listo para servir"}
        </p>
      </div>
    );
  }
}

SoldadoClase.propTypes = {
    fullName: PropTypes.object,
    edad: PropTypes.number,
    mayorDeEdad: PropTypes.bool,
    sexo: PropTypes.string.isRequired
}

export default SoldadoClase;
