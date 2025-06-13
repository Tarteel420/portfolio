import './App.css';
import Header from "./components/Header";
import Home from './pages/Home'
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />

      </Routes>
    </Router>
  );
}

export default App;
