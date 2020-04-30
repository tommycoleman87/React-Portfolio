import React from 'react'
import profile_picture from '../assetts/profile_picture.jpg'

function About() {
    return (
        <section>
            <img src={profile_picture} alt="professional picture of Tommy Coleman"/>
            <h1>
                Tommy Coleman
            </h1>
            <h2>
                Full Stack Web Developer
            </h2>
            <p>
                Hi, I'm Tommy Coleman. 
                I'm a full stack web developer. 
                Look below to see some of my work.
            </p>
        </section>
    )
}

export default About;