import React from 'react';

import Persona from './Persona';

const Principal = () => {
    return (
        <div>
            <h1>Props en componentes funcionales</h1>
            <Persona nombre="Luis" edad={15}/>
            <Persona nombre={'Eduardo'} edad={29}/>
            <Persona nombre={'Jose'} edad={18}/>
            <Persona nombre={'Maria'} edad={15}/>
        </div>
    );
};

export default Principal;