import React from 'react'
import './projects.css'

const Bootcamp = (props) => {
    const projects = [1, 2, 3, 4]

    return (
        <div className="projects-main-container">
            { projects.map(project => (
                <div className="project-sub-container">
                    <div className="project">
                        <h2>{project}</h2>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Bootcamp