import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className="contact-container" data-aos="fade-up" data-aos-delay="200">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <p className="contact-label">Email</p>
            <a href="mailto:2200030209cseh@gmail.com">2200030209cseh@gmail.com</a>
          </div>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div>
            <p className="contact-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/karthikeya-bharadwaja-pisupati-804620247/"
              target="_blank"
              rel="noreferrer"
            >
              Karthikeya Bharadwaja Pisupati
            </a>
          </div>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <p className="contact-label">Phone</p>
            <span>+91 70756 86837</span>
          </div>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <p className="contact-label">Location</p>
            <span>AT Agraharam, Guntur, Andhra Pradesh, India</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
