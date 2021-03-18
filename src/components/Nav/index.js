import React, {useState } from 'react'
import './nav.css'

import Container from '../Container'

const Nav = () => {
    const navOptions = [
        {
            title: 'Bootcamp Projects',
            className: 'bp-menu-item'
        },
        {
            title: 'Personal Projects',
            className: 'pp-menu-item'
        },
        {
            title: 'About',
            className: 'ab-menu-item'
        },
        {
            title: 'Contact',
            className: 'ct-menu-item'
        }
    ]

    const [container, setContainer] = useState(-1)

    const switchContainer = (e) => {
        setContainer(e.target.closest('li').getAttribute('data-id'))
    }

    return (
        <nav>
            <ul className="file-cabinet">
                <li className="file-cabinet-menu">
                    <span className="material-icons">menu</span>
                    <h3>Menu</h3>
                </li>
                { navOptions.map((nav, i) => 
                    (<li onClick={switchContainer} className={`file-item ${nav.className}`} key={i} data-id={i}>
                        <h3>{nav.title}</h3>
                        {
                            Number(container) >= 0 &&
                            Number(container) === i && 
                            <Container container={container}></Container>
                        }
                        
                    </li>)
                ) }
            </ul>
        </nav>
    )
}

export default Nav