import React, { useState } from 'react'
import './contact-form.css'

const ContactForm = () => {
    const [formInputs, setFormInputs] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState() 

    const {name, email, message} = formInputs

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        console.log("Handle change")
    }

    return (
        <div>
            <h1>Contact me</h1>
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
                        <div>
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