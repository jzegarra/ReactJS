import React, { Component } from "react";
import Persona from './Persona';

class Principal extends Component {
  render() {
    return (
      <div>
        <h1>Props en componentes Clase</h1>
        <Persona nombre="Liliana" edad={27}/>
        <Persona nombre={'Ariadna'} edad={25}/>
        <Persona nombre="Paul" edad={24}/>
        <Persona nombre="Randy" edad={23}/>
      </div>
    );
  }
}

export default Principal;
