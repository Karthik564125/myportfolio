import React from "react";
import './PortfolioStyles.css';

// Importing logos
import klLogo from "../assets/kl.png";
import chLogo from "../assets/ch.png";

const education = [
  {
    institution: "KL University, Vaddeswaram, Andhra Pradesh, India",
    degree: "B.Tech in Computer Science and Engineering",
    details: "CGPA: 8.85 (Till Date)",
    year: "2022 - 2026",
    logo: klLogo,
  },
  {
    institution: "Sri Chaitanya Junior College, Guntur, Andhra Pradesh, India",
    degree: "Intermediate (MPC)",
    details: "Percentage: 70%",
    year: "2020 - 2022",
    logo: chLogo,
  },
  {
    institution: "Santhan High School, Guntur, Andhra Pradesh, India",
    degree: "High School",
    details: "Percentage: 81%",
    year: "2019 - 2020",
    // No logo
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="education-card">
              <div className="education-info">
                <h3 className="institution">{item.institution}</h3>
                <p className="degree">{item.degree}</p>
                <p className="details">{item.details}</p>
                <span className="year">{item.year}</span>
              </div>
              {item.logo && <img src={item.logo} alt="logo" className="edu-logo" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
