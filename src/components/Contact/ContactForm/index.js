import React, { useState } from 'react'
import validateEmail from './emailValidation'
import './contact-form.css'

const ContactForm = () => {
    const [formInputs, setFormInputs] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState() 

    const {name, email, message} = formInputs

    const handleSubmit = (e) => {
        e.preventDefault()
        // do something with the backend that isnt there yet
        if (errorMessage) {
            console.log('fix errors before submitting')
        } else {
            console.log(formInputs)
        }

        setFormInputs({ name: '', email: '', message: '' })
    }
    const handleChange = (e) => {
        if (e.target.value.length < 1) {
            e.target.classList.add('error-class')
            setErrorMessage(`Please enter a${e.target.name === 'email' ? 'n' : ''} ${e.target.name} before submitting!`)
        } else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            e.target.classList.add('error-class')
            setErrorMessage("Invalid email!")
        } else {
            e.target.classList.remove('error-class')
            setErrorMessage()
            setFormInputs({...formInputs, [e.target.name]: e.target.value})
        }
    }

    return (
        <div>
            <h3>Contact me</h3>
            <p><i>This form is for display purposes only</i></p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="name">Name:</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />                            
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="message">Message:</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />                            
                        </div>
                    </div>
                </div>
                {
                    errorMessage && (
                        <div className="error-message-div">
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )
                }
                <div className="form-submit">
                    <button type="submit" className="btn btn-light">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm