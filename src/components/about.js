import React from 'react'
import profile_picture from '../assetts/profile_picture.jpg'
import '../css/about.css'

function About() {
    return (
        <section className='about'>
            <img src={profile_picture} alt="professional picture of Tommy Coleman" className='profile-picture'/>
            <div className="about-container">
                <h1>
                    Tommy Coleman
                </h1>
                <h2>
                    Full Stack Web Developer
                </h2>
                <p>
                    Hi, I'm Tommy Coleman. <br />
                    I'm a full stack web developer. <br />
                    Look below to see some of my work.
                </p>
                <button>
                    PROJECTS
                </button>
            </div>
        </section>
    )
}

export default About;