import React from 'react'
import './nav.css'

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

    return (
        <nav>
            <ul className="file-cabinet">
                { navOptions.map((nav, i) => 
                    (<li className={`file-item ${nav.className}`} key={i}>
                        <h3>{nav.title}</h3>
                    </li>)
                ) }
            </ul>
        </nav>
    )
}

export default Nav