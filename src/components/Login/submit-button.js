import React from 'react';
import './login.css'

class SubmitButton extends React.Component {

    render() {
        return (
            <div className="submitButton">
                <button 
                    className='submitbtn'
                    disabled={this.props.disabled}
                    onClick={ () => this.props.onClick()}
                >Submit</button>
            </div>
        );
    }
}

export default SubmitButton;