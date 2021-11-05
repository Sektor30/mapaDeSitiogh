import React, { PureComponent } from 'react'


class MarcoTres extends React.Component {
    render() {
        return (

            <div className="container  justify-content-xl-center ">
                
                <div className="row g-3  justify-content-xl-center   ">
                <h3 className="container text-center"> Elige el servicio al cual deseas comunicarte</h3>

                    <div className=" col col-xl-4 col-md-12 col-ms-10 col-xs-10   pt-5 text-center ">
                    <select className="btn-section text-center" name="elegir_servicio" id="elegir_servicio" required>
                        <option value="1">Servicio1</option>
                        <option value="2">Servicio2</option>
                        <option value="3">Servicio3</option>
                    </select>
                    </div>
                    <div className="col col-xl-4 col-md-12 col-sm-12 col-xs-12  text-center  " >
                    <input className=" col " type="submit" value="Enviar" id= "enter">
                    </input>
                    </div>
                </div>

            

            </div>


        );
    }
}

export default MarcoTres;