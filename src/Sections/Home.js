import React from 'react';
import './PortfolioStyles.css';

import profileImg from '../assets/karthik.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">

        <div className="home-image">
          <img src={profileImg} alt="Karthik" />
        </div>

        <div className="home-content">
          <h1>
            <Typewriter
              words={["Hey guys, I'm Karthik 👋", "React Enthusiast ⚛️"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p>
            I'm a 3rd year B.Tech Computer Science student at KL University with a deep passion for frontend development.
            I love building visually stunning and responsive websites using modern tech like <strong>React</strong>, 
            <strong> Tailwind CSS</strong>, and <strong>JavaScript</strong>. <br /><br />
            I'm constantly exploring new trends, and I enjoy bringing ideas to life with clean, minimal design.
            Learning new things everyday and preparing myself and 
            I am ready to take my first Job/Intern Experience
          </p>

          
        </div>

      </div>
    </section>
  );
};

export default Home;
