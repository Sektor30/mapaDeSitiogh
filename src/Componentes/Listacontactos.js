import React, { PureComponent } from 'react'

class Listacontactos extends React.Component {
    render() { 
        return (

            <div className="col-xs-12 col-sm-4 col-lg-2">
                <a className="nav-link active" href="./Cont/contacto.html"> <h4> Contáctanos </h4> </a>
                <a className="nav-link active" href="./Cont/contacto.html#ubicacion">Ubicación</a>
                <a className="nav-link active" href="./Cont/contacto.html#comu">Comunícate con nosotros</a>
            </div>
        );
    }
}
 
export default Listacontactos;