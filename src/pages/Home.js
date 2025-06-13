// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import myPhoto from '../photos/main.jpg'; // Place your image in src/assets/

const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <img src={myPhoto} alt="My Portrait" className="home-image" />
            </div>
            <div className="home-right">
                <h1>Hi, I'm Tarteel Imran</h1>
                <p>
                    I am a full Stack Developer (React & React Native) with 4+ years of hands-on experience designing and
                    building responsive, user-focused websites and mobile applications using React, React Native,
                    MERN stack, and modern web technologies. Proven ability to enhance UI/UX, optimize
                    performance, and deliver scalable solutions. Completed internships with EMR Chains and Nalexus
                    Technologies. Recently graduated with a BSc in Computer Science from NUST.
                </p>
            </div>
        </div>
    );
};

export default Home;
