import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Karthik Portfolio</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#resume">Resume</a>
        <a href="#education">Education</a>
        <a href="#achievements">Achievements</a>
        <a href="#projects">Projects</a> {/* ✅ fixed here */}
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
