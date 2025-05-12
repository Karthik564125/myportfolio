import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-cards">
        <div className="education-card">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p>2022 - 2026</p>
          <p>CGPA: 8.85 (Till Date)</p>
          <p>KL University, Vaddeswaram, Andhra Pradesh, India</p>
        </div>
        <div className="education-card">
          <h3>Intermediate (MPC)</h3>
          <p>2020 - 2022</p>
          <p>Percentage: 70%</p>
          <p>Sri Chaitanya Junior College, Guntur, Andhra Pradesh, India</p>
        </div>
        <div className="education-card">
          <h3>High School</h3>
          <p>2019 - 2020</p>
          <p>Percentage: 81%</p>
          <p>Santhan High School, Guntur, Andhra Pradesh, India</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
