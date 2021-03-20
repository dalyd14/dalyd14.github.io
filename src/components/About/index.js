import React from 'react'
import picture from './profile-pic.jpg'
import pdf from '../Resume/David Daly Resume.pdf'
import './about.css'

const About = (props) => {
    return (
        <div className="about-me-container">
            <img className="profile-pic" src={picture} alt="David Daly profile" />
            <div className="about-me-text">
                <p>
                    Hello! My name is David Daly, and I am a professional full-stack web developer. 
                    I graduated from Clemson University with a mechanical engineering degree. 
                    I am passionate about solving problems in a creative fashion. 
                    I develop client-forward apps focused on practicality and cultivating meaningful user experiences. 
                    The technologies I utilize are the MEAN and MERN stacks with Python to help with back-end development. 
                    I am also able to leverage my past experiences at ExxonMobil, of developing tools and working in teams, 
                    to ensure that I deliver thorough products to my customers.
                </p>
                <p>
                    Feel free to browse my projects showcased throughout this portfolio and please reach out with any questions 
                    or if you would like to connect! Also, you can download my resume via the download button in the 
                    bottom right corner or <span className="resume-link"><a href={pdf} download target="_blank" rel="noreferrer">here</a></span>.
                </p>
                <p>Happy Coding!</p>
            </div>  
        </div>
    )
}

export default About