import React, { Component } from 'react';
import Escribenos from './Escríbenos';
import Horario from './Horario';
import Visitanos from './Visitanos';


class MarcoUno extends Component {
    render() {
        return (
            <div className="container" >
                
                <div className="row ml-4 justify-content-center " id="ubicacion">
                    <div className="col col-lg-3 col-md-4 col-sm-6 "><Escribenos /></div>
                    <div className="col col-lg-3 col-md-4 col-sm-6 "><Visitanos /></div>
                    <div className="col col-lg-3 col-md-4 col-sm-6 "> <Horario /></div>
                     
                </div>

            </div>


        );
    }
}

export default MarcoUno;