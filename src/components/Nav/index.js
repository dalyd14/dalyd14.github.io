import React from 'react'

const Nav = () => {
    const navOptions = [
        'Botcamp Projects',
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
                        <a className="nav-link" href="#">{nav}</a>
                    </li>)
                ) }
            </ul>
        </nav>
    )
}

export default Nav