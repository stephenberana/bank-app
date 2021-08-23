import React from 'react';
import InputField from './input-field';
import SubmitButton from './submit-button';
import UserStore from '../stores/userstore'
import './login.css'

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false,
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 20) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

        resetForm() {
            this.setState({
                username: '',
                password: '',
                buttonDisabled: false
            })
        }

    async loginUser (credentials) {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }
        this.setState({
            buttonDisabled: true
        })

    try {

        let res = await fetch('/isLoggedIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        });

        let result = await res.json();
        if (result && result.success) {
            UserStore.loading = false;
            UserStore.isLoggedIn = true;
            UserStore.username = result.username;
            }
        
            else if (result && result.success === false) {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
                this.resetForm();
                alert(result.msg);
            }
        }
    
    catch(e) {
        console.log(e);
        this.resetForm();
    }
}   

// async logOut(credentials) {
//     try {
    
//         let res = await fetch('/logout', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
    
//     let result = await res.json();
//         if (result && result.success) {
//             UserStore.isLoggedIn = false;
//             UserStore.username = '';
//             }
//         }
    
//         catch(e) {
//             console.log(e);
//         }
//     }


    render() {

        
        return (
            <div className="container">
            <div className="loginForm">  
            <h1 className="header">Bank of Wall Street</h1>
            <h2 className="header">Where money never sleeps.</h2>   
               
               Log In
               <InputField
                    className='inputField'
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username : ''}
                    onChange={ (val) => this.setInputValue('username', val)}
                />

                <InputField 
                    className='inputField'
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password: ''}
                    onChange={ (val) => this.setInputValue('password', val)}
                />
            <div className="submitButton">
                <SubmitButton
                    className='submitbtn'
                    type='button'
                    value='Login'
                    disabled={this.state.buttonDisabled}
                    onClick= { () => this.doLogin()}
                />
                </div>
            <div className="registerLink">
                <span className='form-input-signup'>
                Not a member? <br /><a 
                    style={{color: 'white'}} 
                    href='/register-link'>
                        Register here.</a>
                </span>  
            </div>    
        </div>
    </div>  
        );
    }   
}
    
export default LoginForm;
