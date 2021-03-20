import React from 'react'
import pdf from './David Daly Resume.pdf'
import './resume.css'

const Resume = (props) => {
    
    const {
        menuPressed
    } = props

    return (
        <a className={'resume-button ' + (menuPressed ? '' : 'bottom')} href={pdf} download target="_blank" rel="noreferrer">
            <span className="material-icons">file_download</span>
        </a>
    )
}

export default Resume