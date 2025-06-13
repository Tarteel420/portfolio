// src/pages/Skills.js
import React from 'react';
import '../styles/Skills.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; 


const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      list: [
        { name: 'React.js', level: 'Advanced', icon: <FaReact /> },
        { name: 'React Native', level: 'Advanced', icon: <FaReact /> },
        { name: 'HTML5', level: 'Advanced', icon: <FaHtml5 /> },
        { name: 'CSS3', level: 'Advanced', icon: <FaCss3Alt /> },
        { name: 'JavaScript', level: 'Expert', icon: <FaJs /> },
        { name: 'Bootstrap', level: 'Expert', icon: <FaBootstrap /> },
      ]
    },
    {
      category: 'Backend',
      list: [
        { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs /> },
        { name: 'Express.js', level: 'Intermediate', icon: <SiExpress /> },
        { name: 'MongoDB', level: 'Advanced', icon: <SiMongodb /> },
        { name: 'PHP', level: 'Intermediate', icon: <FaPhp /> },
      ]
    },
    {
      category: 'Tools & Platforms',
      list: [
        { name: 'Git', level: 'Proficient', icon: <FaGitAlt /> },
        { name: 'GitHub', level: 'Proficient', icon: <FaGithub /> },
        { name: 'Firebase', level: 'Advanced', icon: <SiFirebase /> },
        { name: 'VS Code', level: 'Expert', icon: <FaCode /> },
        { name: 'Figma', level: 'Familiar', icon: <FaFigma /> },
        { name: 'REST APIs', level: 'Proficient', icon: <SiPostman /> }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      {skills.map((group, i) => (
        <div key={i} className="skill-group">
          <h3>{group.category}</h3>
          <div className="skills-grid">
            {group.list.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <div className="name">{skill.name}</div>
                <div className="level">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
