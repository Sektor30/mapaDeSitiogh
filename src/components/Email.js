import React, { PureComponent } from 'react'

class Email extends React.Component {
    render() {
        return (
            
            
                <form  className="formulario_contacto col-sm-12 col-lg-12 col-xl-10 justify-content-center " name="formulario_contacto">
                    <div className="input-group">
                        <input className="datos" type="email" id="email" name="email" placeholder="Email" required pattern="[A-Za-z0-9_-]{10,60}">
                         </input>
                    </div>
                </form>
            
            
            

        );
    }
}

export default Email;