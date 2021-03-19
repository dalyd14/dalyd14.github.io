import React from 'react'
import './projects.css'

const Projects = ({ type }) => {
    const bootcampProjects = [1, 2, 3, 4]
    const personalProjects = [5, 6, 7]


    const projects = (type === 'bootcamp') ? bootcampProjects : personalProjects

    return (
        <div className="projects-main-container">
            { projects.map((project, i) => (
                <div className="project-sub-container" key={i}>
                    <div className="project">
                        <h2>{project}</h2>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Projects