import React, { PureComponent } from 'react'

class Asunto extends React.Component {
    render() {
        return (
            <div className="input-group">
                <textarea name="mensaje" id="mensaje" placeholder="Asunto" required>
                    
                </textarea>
            </div>

        );
    }
}

export default Asunto;