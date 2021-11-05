import React, { PureComponent } from 'react'
import Nombre from './Nombre';
import Email from './Email'
import Asunto from './Asunto'


class MarcoDos extends React.Component {
    render() {
        return (
            <div>
               <div className="container">

               <div id="comu" className="formulario col-xxl-12">
                   <div><Nombre /></div>
                   <div><Email /></div>
                   <div><Asunto /></div>
            </div>
            </div>
            </div>
            
        );
    }
}

export default MarcoDos;