import React, { PureComponent } from 'react'
import Listamapa from './Listamapa';


class Listamenu  extends React.Component {
    render() { 
        return (
            <div className="">
            <div className="col-xs-12 col-sm-4 col-lg-2">
                <a className="nav-link active" href="./RETO1 V2-Menu/menu.html"><h4>Menú</h4></a>
                <a className="nav-link active" href="./RETO1 V2-Menu/menu.html#comida">Comidas</a>
                <a className="nav-link active" href="./RETO1 V2-Menu/menu.html#bebidas">Bebidas</a>
            </div>
        </div>


        );
    }
}
 
export default Listamenu ;