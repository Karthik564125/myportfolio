import React from 'react';
import efarming from '../assets/efarming.png';
import bmi from '../assets/bmi.png';
import weather from '../assets/weather.png';
import './Projects.css';

const allProjects = [
  {
    title: 'EFarming',
    description: 'Developed a React based platform connecting farmers with consumers, enabling direct sales of fresh produce.',
    img: efarming,
    repoLink: 'https://github.com/Karthik564125/EFarming',
  },
  {
    title: 'Lifestyle Management',
    description: 'Developed a personalized web application serving users, delivering tailored health recommendations on BMI.',
    img: bmi,
    repoLink: 'https://github.com/bhavana050604/bmi',
  },
  {
    title: 'Weather App',
    description: 'React app fetching live weather data using OpenWeatherMap API with elegant UI.',
    img: weather,
    repoLink: 'https://github.com/Karthik564125/weatherapp',
    liveLink: 'https://karthik564125.github.io/weatherapp/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
