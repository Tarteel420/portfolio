import React from 'react';
import '../styles/About.css';
import { FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-heading">About Me</h2>

      <div className="education-card">
        <FaGraduationCap className="icon" />
        <h3>Bachelor of Science in Computer Science</h3>
        <p><strong>University:</strong> National University of Sciences and Technology, Islamabad, Pakistan</p>
        <p><strong>Graduation Year:</strong> 2025</p>
        <p><strong>Relevant Courses:</strong> Digital Image Processing, Web Development, Virtual & Augmented Reality, Artificial Intelligence, Deep Learning, Computer Networks, Linear Algebra, DLD, OOP</p>
        <p>Developed comprehensive knowledge and hands-on skills in cutting-edge technologies and core CS principles.</p>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><FaPhoneAlt className="icon" /> +92 327 5970043</p>
        <p><FaEnvelope className="icon" /> tarteelimran@gmail.com</p>
        <p><FaMapMarkerAlt className="icon" /> Abbottabad Pakistan</p>
        <p>
          <a href="https://www.linkedin.com/in/tarteelimran/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn Profile
          </a>
        </p>
        <p>
          <a href="https://github.com/Tarteel420" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
