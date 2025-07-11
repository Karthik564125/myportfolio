import React, { useState, useEffect } from 'react';
import './Achievements.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import redhat from '../assets/redhat.png';
import cp from '../assets/cp.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c5 from '../assets/c5.png';

const achievements = [
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    issued: 'Issued 18/9/24',
    img: redhat,
    verifyLink: 'https://www.credly.com/badges/1cfcdad6-b8aa-476b-8a6d-2d9eb0bd13b4/public_url',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    issued: 'Issued 29/3/25',
    img: cp,
    verifyLink: 'https://www.credly.com/badges/423cedc4-6c58-4f28-bb88-95c257e98daf/public_url',
  },



  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    issued: 'Issued 19/10/25',
    img: c5,
    verifyLink: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=PK6MYCFFBeL1bvJaTqOJBA87evizm9h1P/smbtR60U9lksJCaRUgpPcNiSzDDwod',
  },
  {
    title: 'Web Full Stack Developer Virtual Internship',
    issuer: 'EduSkills Academy',
    issued: 'Issued September, 2024',
    img: c1,
  },

  {
    title: 'Employability Skills',
    issuer: 'APSSDC',
    issued: 'Issued August, 2024',
    img: c2,
  },


];

const Achievements = () => {
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section id="achievements" className="achievements-section" data-aos="fade-up">
        <h2 className="achievements-title" data-aos="fade-up" data-aos-delay="100">Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div
              className="achievement-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="achievement-image"
                onClick={() => setModalImg(item.img)}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-issuer">{item.issuer}</p>
              <p className="achievement-issued">{item.issued}</p>
              {item.verifyLink && (
                <a
                  href={item.verifyLink}
                  className="verify-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <span className="close-btn" onClick={() => setModalImg(null)}>&times;</span>
          <img className="modal-content" src={modalImg} alt="Full View" />
        </div>
      )}
    </>
  );
};

export default Achievements;
