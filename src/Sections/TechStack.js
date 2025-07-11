import React from 'react';
import './TechStack.css';
import { FaCode, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaCloud } from 'react-icons/fa';

const TechStack = () => {
  return (
    <section className="tech-stack" id="techstack">
      <h2 className="section-title">Tech Stack</h2>
      <div className="stack-container">
        <div className="stack-card">
          <div className="icons">
            <FaCode className="icon" />
            <FaJava className="icon" />
          </div>
          <h3>Programming <br />Languages</h3>
          <p>C, Java</p>
        </div>

        <div className="stack-card">
          <div className="icons">
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <FaJs className="icon" />
            <FaReact className="icon" />
          </div>
          <h3>Web Technologies</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="stack-card">
          <div className="icons">
            <FaDatabase className="icon" />
          </div>
          <h3>Database</h3>
          <p>MySQL</p>
        </div>

        <div className="stack-card">
          <div className="icons">
            <FaCloud className="icon" />
          </div>
          <h3>Cloud</h3>
          <p>Familiar with AWS Services</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
