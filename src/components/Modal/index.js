import React from 'react'
import './modal.css'

import { Github, Mysql, Javascript, CssThree, 
    Html5, NodeDotJs, Express, Jquery, SocketDotIo, Bootstrap, ReactJs, Amazonaws, Mongodb, Apollographql } from '@icons-pack/react-simple-icons'

const Technologies = {
    "Html5": {
        comp: Html5,
        title: "HTML5" 
    },
    "CssThree": {
        comp: CssThree,
        title: "CSS3" 
    },
    "Javascript": {
        comp: Javascript,
        title: "JavaScript" 
    },
    "Jquery": {
        comp: Jquery,
        title: "jQuery" 
    },
    "Bootstrap": {
        comp: Bootstrap,
        title: "Bootstrap" 
    },
    "NodeDotJs": {
        comp: NodeDotJs,
        title: "Node.js" 
    },
    "Express": {
        comp: Express,
        title: "Express" 
    },
    "Mysql": {
        comp: Mysql,
        title: "MySQL" 
    },
    "Mongodb": {
        comp: Mongodb,
        title: "mongoDB" 
    },
    "SocketDotIo": {
        comp: SocketDotIo,
        title: "socket.io"
    },
    "ReactJs": {
        comp: ReactJs,
        title: "React.js"
    },
    "AmazonS3": {
        comp: Amazonaws,
        title: "Amazon S3"
    },
    "ApolloGQL": {
        comp: Apollographql,
        title: "Apollo GQL"
    }

}

const Modal = ({ onClose, currentProject }) => {

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
                                const TechComp = Technologies[tech].comp;
                                return (
                                <div key={'container' + i}>
                                    <TechComp key={'comp' + i} />
                                    <h6 key={'title' + i}>{Technologies[tech].title}</h6>
                                </div> 
                                )                                
                            } else if (tech === "Server side APIs") {
                                return (
                                    <div key={'container' + i}>
                                        <span key={'comp' + i} className="material-icons">dns</span>
                                        <h6 key={'title' + i}>{'3rd Party APIs'}</h6>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={'container' + i}>
                                        <span key={'comp' + i} className="material-icons">build</span>
                                        <h6 key={'title' + i}>{tech}</h6>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="project-btn-group">
                    <a type="button" href={currentProject.site_url} target="_blank" rel="noreferrer" className="project-btn btn btn-light">
                        <span className="material-icons">language</span>
                        Visit Site
                    </a>
                    <a type="button" href={currentProject.github_url} target="_blank" rel="noreferrer" className="project-btn btn btn-light">
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