import React from 'react'

import Bootcamp from '../BootcampProjects'
import Personal from '../PersonalProjects'
import Contact from '../Contact'
import About from '../About'

const Container = ({ container }) => {

    const componentArr = [
        <Bootcamp />,
        <Personal />,
        <About />,
        <Contact />        
    ]

    return (componentArr[Number(container)])
}

export default Container