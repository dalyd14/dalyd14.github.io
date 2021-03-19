import React from 'react'
import { Github } from '@icons-pack/react-simple-icons'
import { Linkedin } from '@icons-pack/react-simple-icons'

import './contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-tile">
                <a href="tel:+1610-675-8519">
                    <span className="material-icons">phone_iphone</span>
                    <div className="contact-text">
                        (610) 675-8519  
                    </div>                         
                </a>
            </div>
            <div className="contact-tile">
                <a href="mailto:dalyd14@gmail.com">
                    <span className="material-icons">mail_outline</span>
                    <div className="contact-text" style={{fontSize: ".85rem"}}>
                        dalyd14@gmail.com
                    </div>                      
                </a>  
            </div>
            <div className="contact-tile">
                <a href="https://github.com/dalyd14" target="_blank" >
                    <Github className="react-icon"/>
                    <div className="contact-text">
                        GitHub
                    </div>                       
                </a>
            </div>
            <div className="contact-tile">
                <a href="https://www.linkedin.com/in/david-daly-a627a2b5" target="_blank" >
                    <Linkedin className="react-icon" />
                    <div className="contact-text">
                        LinkedIn
                    </div>
                </a>  
            </div>
        </div>
    )
}

export default Contact