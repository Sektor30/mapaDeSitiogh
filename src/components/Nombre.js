import React, { PureComponent } from 'react'

class Nombre extends React.Component {
    render() {
        return (
            
                
                    <form className="formulario_contacto " name="formulario_contacto">
                        <div className="input-group ">
                            <input className="datos" type="text" id="nombre" name="nombre" placeholder="Nombre" required pattern="{10,60}">
                                </input>
                        </div>
                    </form>

                
            


        );
    }
}

export default Nombre;