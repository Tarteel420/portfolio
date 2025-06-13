import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="experience-title">Professional Experience</h2>

      <div className="experience-section">
        <h3>Freelance & Personal Projects</h3>
        <p className="experience-duration">2020 – Present</p>
        <p>
          Developed and deployed websites and mobile apps for startups and small businesses using
          React, React Native, and MERN stack. Collaborated with clients to gather requirements and
          deliver tailored solutions with interactive UI and secure backends.
        </p>
      </div>

      <h2 className="experience-title">Internships</h2>

      <div className="experience-section">
        <h3>Nalexus Technologies</h3>
        <p className="experience-duration">Jul 2023 – Aug 2023</p>
        <p>
          Built responsive web applications to enhance user engagement using the MERN stack and
          modern web development techniques.
        </p>
      </div>

      <div className="experience-section">
        <h3>EMR Chains</h3>
        <p className="experience-duration">Jul 2023 – Aug 2023</p>
        <p>
          Gained hands-on experience in React and Bootstrap by developing dynamic, user-friendly
          interfaces.
        </p>
      </div>
    </div>
  );
};

export default Experience;
