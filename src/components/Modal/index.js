import React from 'react'
import './modal.css'

import { Github, Mongodb, Mysql, Javascript, CssThree, 
    Html5, NodeDotJs, Express, Jquery, SocketDotIo, Bootstrap } from '@icons-pack/react-simple-icons'

const Technologies = {
    "Html5": Html5,
    "CssThree": CssThree,
    "Javascript": Javascript,
    "Jquery": Jquery,
    "Bootstrap": Bootstrap,
    "NodeDotJs": NodeDotJs,
    "Express": Express,
    "Mysql": Mysql,
    "Mongodb": Mongodb,
    "SocketDotIo": SocketDotIo
}

const Modal = ({ onClose, currentProject }) => {

    // const techComponents = currentProject.technologies.map((tech, i) => {
    //     const TechComp = Technologies[tech];
    //     return <TechComp key={i} />
    // })

    // console.log(techComponents)


    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{currentProject.title}</h3>
                <img src={currentProject.picture} alt={currentProject.title} />
                <button type="button" className="close" onClick={onClose} aria-label="Close">
                    <span className="material-icons">clear</span>
                </button>
                <div className="technologies-icons">
                    {
                        currentProject.technologies.map((tech, i) => {
                            if (tech in Technologies) {
                                const TechComp = Technologies[tech];
                                console.log(TechComp)
                                return <TechComp key={i} />                                
                            } else if (tech === "Server side APIs") {
                                return (
                                    <span key={i} className="material-icons">dns</span>
                                )
                            } else {
                                return (
                                    <span key={i} className="material-icons">construction</span>
                                )
                            }
                        })
                    }
                </div>
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
                <div className="project-description">
                    {currentProject.description}
                </div>
            </div>
        </div>

    )
}

export default Modal