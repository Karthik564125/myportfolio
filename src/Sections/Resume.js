import React from 'react';
import './Resume.css';
import resumeImg from '../assets/resume.jpg';

const Resume = () => {
  return (
    <section id="resume" className="resume-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Resume</h2>

      <div className="resume-container" data-aos="zoom-in" data-aos-delay="200">
        <img src={resumeImg} alt="Resume Preview" className="resume-thumb" />

        <a
          href="https://drive.google.com/file/d/1RSo4rMh_nWSyuu5q_7XhKhIZPwMQQfkC/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
