import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './About.css'

function About() {
    return (
        <>
            <Navbar sendPageToNav="/" />
            <div className="home text-center">
                <h1>Pupster</h1>
                <p>They're the Good Boys and Girls</p>
            </div>
        </>
    )
}

export default About
