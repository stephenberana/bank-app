import React from 'react'
import UserForm from './user-form'
import validate from './validate-info'
import './Register.css'

const RegisterNow = () => {
        const {handleChange, values, handleSubmit, errors} = UserForm(validate);

        return (
            <div className="base-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className='header'>
                    <h1>Create your account by filling out 
                        the information below.</h1>
                        </div>    
                {/* username */}
                <div className="form-inputs">
                    <label 
                        htmlFor='username' 
                        className='form-label'>
                    Username        
                    </label>
                    <input 
                        id='username'
                        type='text' 
                        name='username' 
                        className='form-input' 
                        placeholder='Enter your username...'
                        value={values.username}
                        onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                {/* email      */}
                    <div className="form-inputs">
                    <label 
                        htmlFor='email' 
                        className='form-label'>
                    Email
                    </label>
                    <input
                        id='email' 
                        type='email' 
                        name='email' 
                        className='form-input' 
                        placeholder='Enter your email...'
                        value={values.email}
                        onChange={handleChange}/>
                         {errors.email && <p>{errors.email}</p>}
                    </div>
                    {/* password */}
                    <div className="form-inputs">
                    <label 
                        htmlFor='password' 
                        className='form-label'>
                    Password
                    </label>
                    <input
                        id= 'password' 
                        type='password' 
                        name='password' 
                        className='form-input' 
                        placeholder='Enter your password...'
                        value={values.password}
                        onChange={handleChange}/>
                         {errors.password && <p>{errors.password}</p>}
                    </div>  
                    {/* confirmation of password */}
                    <div className="form-inputs">
                    <label 
                        htmlFor='password2' 
                        className='form-label'>
                    Confirm Password
                    </label>
                    <input
                        id= 'password2' 
                        type='password' 
                        name='password2' 
                        className='form-input' 
                        placeholder='Enter your password...'
                        value={values.password2}
                        onChange={handleChange}/>
                         {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <div className='input-btn-cont'>
                    <button className = 'form-input-btn'
                        type='submit'>
                            Sign Up
                        </button>
                        </div>  
                    <div className='register-footer'>
                    <span className='form-input-signup'>
                        Already a member? <br /><a 
                            style={{color: 'white'}} 
                            href='/bank-app'>
                        Log in here.</a>
                </span>     
                    </div>                           
                </form>
            </div>
        )
    }

export default RegisterNow;
