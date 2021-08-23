import { useState} from "react";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function UserForm(validate) {
    
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })       
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
    }

        return {handleChange, values, handleSubmit, errors}
    }
    

export default UserForm