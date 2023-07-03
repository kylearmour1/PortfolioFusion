import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-pic.jpeg';

function About() {
    return (
        <section className='about-section'>
            <h2>About Me</h2>
            <div className='about-content'>
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <p>
                I'm excited to share my journey as a recent graduate of the Full Stack Development course at the University of Washington. Coming from a background in the hospitality sector, where I spent a decade as a bartender and server, I've made a remarkable transition into the tech industry. Throughout my experience in the restaurant business, I developed strong problem-solving and mathematical skills, which have greatly influenced my determination and resilience during my coding studies.

The path to becoming a coder was not without its challenges. Learning to code tested my patience, resilience, and perseverance. However, the joy of being able to build, create, and make a positive impact on the world through coding kept me motivated. Now equipped with a diverse set of skills, ranging from full-stack development to scalable code development, I am constantly amazed by the endless possibilities this field offers.

I bring to the table not only technical skills but also strong project management abilities, meticulous attention to detail, and a commitment to delivering high-quality solutions. With a passion for making meaningful contributions through coding, I eagerly look forward to taking on the role of a Full Stack Engineer and utilizing my expertise to create innovative solutions.
                </p>
            </div>
        </section>
    );
}

export default About;
