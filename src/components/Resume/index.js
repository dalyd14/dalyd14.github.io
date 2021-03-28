import React from 'react'
import pdf from './David Daly Resume.pdf'
import './resume.css'

const Resume = (props) => {
    
    const {
        menuPressed
    } = props

    return (
        <a className={'d-flex flex-column resume-button ' + (menuPressed ? '' : 'bottom')} href={pdf} download target="_blank" rel="noreferrer">
            <span className="material-icons">description</span>
            <p className="resume-label">CV</p>
        </a>
    )
}

export default Resume