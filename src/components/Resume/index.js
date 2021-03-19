import React from 'react'
import './resume.css'

const Resume = (props) => {
    
    const {
        menuPressed
    } = props

    return (
        <a className={'resume-button ' + (menuPressed ? '' : 'bottom')} href='./David Daly Resume.pdf' download target="_blank">
            <span className="material-icons">file_download</span>
        </a>
    )
}

export default Resume