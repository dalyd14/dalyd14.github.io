import React from 'react'
import picture from './profile-pic.jpg'
import './about.css'

const About = (props) => {
    return (
        <div className="about-me-container">
            <img className="profile-pic" src={picture} alt="David Daly profile" />
            <p className="about-me-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida egestas lorem, vel auctor turpis dignissim id. Maecenas eu nunc augue. Suspendisse id risus ut nibh suscipit ultrices. Cras faucibus ultrices diam et pulvinar. Pellentesque imperdiet volutpat dapibus. Curabitur pharetra ante sed risus malesuada tempor ut sed mi. Nullam auctor velit at luctus dapibus. Integer quis viverra metus. Proin rutrum dictum ante non fermentum. Donec est orci, interdum in mauris ac, accumsan eleifend nunc. Nullam elementum mauris at erat euismod, a commodo enim laoreet. Suspendisse sit amet turpis vel lacus dictum maximus et laoreet nibh.</p>  
        </div>
    )
}

export default About