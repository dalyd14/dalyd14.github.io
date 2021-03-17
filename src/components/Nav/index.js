import React from 'react'
import './nav.css'

const Nav = () => {
    const navOptions = [
        'Bootcamp Projects',
        'Personal Projects',
        'About',
        'Contact',
        'Resume'
    ]

    return (
        <nav>
            <ul className="nav">
                { navOptions.map((nav, i) => 
                    (<li className="nav-item" key={i}>
                        <a className="nav-link" href="#">
                            <h3>{nav}</h3>
                        </a>
                    </li>)
                ) }
            </ul>
        </nav>
    )
}

export default Nav