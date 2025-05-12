import React from 'react';
import './Resume.css';
import resumePDF from '../assets/Karthik Resume.pdf'; // make sure the path is correct

const Resume = () => {
  return (
    <section id="resume" className="resume-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Resume</h2>
      
      <div className="resume-preview-container" data-aos="zoom-in" data-aos-delay="200">
        <iframe
          src={resumePDF}
          title="Karthik Resume"
          frameBorder="0"
          className="resume-preview"
        ></iframe>
      </div>

      <a
        href={resumePDF}
        download
        className="download-resume-button"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
