import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:2200030209cseh@gmail.com">You can send me a mail here!</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/karthikeya-bharadwaja-pisupati-804620247/" target="_blank" rel="noreferrer">
            Karthikeya Bharadwaja Pisupati
          </a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>+91 70756 86837</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>AT Agraharam, Guntur, Andhra Pradesh, India</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
