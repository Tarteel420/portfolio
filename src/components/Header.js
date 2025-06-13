import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Header;
