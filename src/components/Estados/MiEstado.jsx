import React, { Component } from "react";
import Propagacion from "./Propagacion";
class MiEstado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: this.props.numero,
    };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>Estados</h1>
        <p>
          Mi estado es: <Propagacion valor={this.state.contador}/>
        </p>
      </div>
    );
  }
}

export default MiEstado;
