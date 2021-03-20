import React from 'react'
import './modal.css'

import { Github, Mongodb, Javascript, CssThree, Html5, NodeDotJs, Express, SocketDotIo, Bootstrap } from '@icons-pack/react-simple-icons'

const Modal = ({ onClose, currentProject }) => {

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{currentProject.title}</h3>
                <img src={currentProject.picture} alt={currentProject.title} />
                <button type="button" className="close" onClick={onClose} aria-label="Close">
                    <span className="material-icons">clear</span>
                </button>
                <div className="project-btn-group">
                    <a type="button" href={currentProject.site_url} target="_blank" className="project-btn btn btn-light">
                        <span className="material-icons">language</span>
                        Visit Site
                    </a>
                    <a type="button" href={currentProject.github_url} target="_blank" className="project-btn btn btn-light">
                        <Github />
                        Visit GitHub
                    </a>                    
                </div>

            </div>
        </div>

    )
}

export default Modal