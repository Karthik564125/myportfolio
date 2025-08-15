import React from 'react';
import farmbasket from '../assets/farmbasket.png';
import nutritrack from '../assets/nutritrack.png';
import weatherapp from '../assets/weatherapp.png';
import './PortfolioStyles.css';

const allProjects = [
  {
    title: 'FarmBasket',
    description: 'Developed a React-based platform connecting farmers with consumers for direct fresh produce sales.',
    img: farmbasket,
    repoLink: 'https://github.com/Karthik564125/FarmBasket',
    liveLink: 'https://efarming-1.onrender.com/',
  },
  {
    title: 'NutriTrack',
    description: 'Personalized web app offering tailored health recommendations and BMI tracking.',
    img: nutritrack,
    repoLink: 'https://github.com/Karthik564125/NutriTrack',
    liveLink: 'https://nutritrack-5qbw.onrender.com/',
  },
  {
    title: 'Weather App',
    description: 'React app fetching live weather data from OpenWeatherMap API with an elegant UI.',
    img: weatherapp,
    repoLink: 'https://github.com/Karthik564125/weatherapp',
    liveLink: 'https://karthik564125.github.io/weatherapp/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">Here are some of the websites I've built</p>

      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  📂 GitHub
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
