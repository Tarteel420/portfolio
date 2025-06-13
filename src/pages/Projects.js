import React from 'react';
import '../styles/Projects.css';
import { FaCode } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: 'Travel Blog Website',
      description: 'A modern blog for sharing travel stories, itineraries, and images with an elegant UI.',
      stack: 'HTML CSS JS',
    },
    {
      title: 'Science Fiction Website',
      description: 'An engaging science fiction themed website featuring futuristic design and content sections.',
      stack: 'React.js, Node.js, Bootstrap',
    },
    {
      title: 'NGO Website',
      description: 'A responsive website built for an NGO to highlight their mission, events, and donation system.',
      stack: 'React, Express, MongoDB, CSS',
    },
    {
      title: 'Hostel Accommodation App',
      description: 'A student-focused mobile app for finding budget hostels with filters, AI ChatBot and virtual tours.',
      stack: 'React Native, Firebase',
    },
    {
      title: 'Multiple Other Projects',
      description: 'Includes e-commerce stores, and admin dashboards developed for various clients.',
      stack: 'React, Firebase, PHP, MongoDB',
    },
  ];

  return (
    <div className="projects-page">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-box" key={index}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="stack"><FaCode /> {project.stack}</p>
            </div>
            <div className="project-actions">
              {/* Optional: Add live/demo link or GitHub */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Demo</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
