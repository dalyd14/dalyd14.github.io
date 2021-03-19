import React from 'react'

import Projects from '../Projects'
import Contact from '../Contact'
import About from '../About'

const Container = ({ container }) => {

    const componentArr = [
        <Projects type="bootcamp"/>,
        <Projects type="personal"/>,
        <About />,
        <Contact />        
    ]

    return (componentArr[Number(container)])
}

export default Container