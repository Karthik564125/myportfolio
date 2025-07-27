import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">Karthik Portfolio</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#resume" onClick={toggleMenu}>Resume</a>
        <a href="#education" onClick={toggleMenu}>Education</a>
        <a href="#achievements" onClick={toggleMenu}>Achievements</a>
        <a href="#techstack" onClick={toggleMenu}>Tech Stack</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
