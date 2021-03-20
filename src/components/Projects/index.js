import React, { useState } from 'react'
import './projects.css'
import bootcampProjects from './bootcamp-projects.json'
import personalProjects from './personal-projects.json'

import bootcampImages from './images/bootcamp-images'
import personalImages from './images/personal-images'

import Modal from '../Modal'

const Projects = ({ type }) => {

    const projects = (type === 'bootcamp') ? bootcampProjects : personalProjects
    const projectImages = (type === 'bootcamp') ? bootcampImages : personalImages

    const [currentProject, setCurrentProject] = useState()
    
    const toggleModal = (project, i) => {
        setCurrentProject({...project, picture: projectImages[i], index: i})
        setIsModalOpen(!isModalOpen)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return (
        <>
        {isModalOpen && (
                <Modal currentProject={currentProject} onClose={toggleModal} />
            )}
        <div className="projects-main-container">
            { projects.map((project, i) => (
                <div className="project-sub-container" key={i}>
                    <div className="project" onClick={() => toggleModal(project, i)}>
                        <img className="project-img" src={projectImages[i]} />
                    </div>
                    <h2>{project.title}</h2>
                </div>
            )) }
        </div>
        </>
    )
}

export default Projects