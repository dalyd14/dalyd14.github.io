import React from 'react'

import { Github, Linkedin } from '@icons-pack/react-simple-icons'

import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-tile">
                    <a href="tel:+1610-675-8519">
                        <span className="material-icons">phone_iphone</span>                       
                    </a>
                </div>
                <div className="footer-tile">
                    <a href="mailto:dalyd14@gmail.com">
                        <span className="material-icons">mail_outline</span>                   
                    </a>  
                </div>
                <div className="footer-tile">
                    <a href="https://github.com/dalyd14" target="_blank" rel="noreferrer">
                        <Github className="react-icon-footer"/>                  
                    </a>
                </div>
                <div className="footer-tile">
                    <a href="https://www.linkedin.com/in/david-daly-a627a2b5" target="_blank" rel="noreferrer">
                        <Linkedin className="react-icon-footer" />
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default Footer