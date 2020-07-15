import React, { Component } from 'react';

class EstudianteClase extends Component {
    render() {
        const promedio = this.props.suma(this.props.notas) / this.props.notas.length;
        return (
            <div>
                {this.props.titulo}
                <p>mi nombre es: {this.props.nombre}</p>
                <p>mis notas son {this.props.notas.join(", ")}</p>
                <p>El promedio es: {promedio}</p>
            </div>
        );
    }
}

export default EstudianteClase;