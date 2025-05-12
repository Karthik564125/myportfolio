import React, { useState, useEffect } from 'react';
import './Achievements.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import redhat from '../assets/redhat.png';
import cp from '../assets/cp.png';
import aws from '../assets/aws.png';
import ibm1 from '../assets/ibm1.png';
import ibm2 from '../assets/ibm2.png';
import ibm3 from '../assets/ibm3.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c4 from '../assets/c4.png';
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
    title: 'AWS Educate Getting Started with Cloud Ops',
    issuer: 'AWS',
    issued: 'Issued 14/3/25',
    img: aws,
    verifyLink: 'https://www.credly.com/badges/13b8ad00-bc7b-4bd6-8712-0da1157ecdae/public_url',
  },
  {
    title: 'Automation Anywhere Certified Essentials RPA Professional 2023',
    issuer: 'Automation Anywhere',
    issued: 'Issued 2/1/25',
    img: c4,
    verifyLink: 'https://certificates.automationanywhere.com/02898852-f994-4dfc-a1da-62abc47deda3#acc.EU4iXKyJ',
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
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    issued: 'Issued 31/5/24',
    img: ibm2,
    verifyLink: 'https://www.credly.com/badges/a105caa3-0e46-4ae6-b76b-cfa0882f0029/public_url',
  },
  {
    title: 'Enterprise Design Thinking Co-Creator',
    issuer: 'IBM',
    issued: 'Issued 31/5/24',
    img: ibm1,
    verifyLink: 'https://www.credly.com/badges/69f20074-ecfd-4bbc-989e-88579161f343/public_url',
  },
  {
    title: 'Enterprise Design Thinking - Team Essentials for AI',
    issuer: 'IBM',
    issued: 'Issued 31/5/24',
    img: ibm3,
    verifyLink: 'https://www.credly.com/badges/a329d1b6-2cc9-4778-98c0-fa2f3a310fb3/public_url',
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
