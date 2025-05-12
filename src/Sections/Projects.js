import React from 'react';
import efarming from '../assets/efarming.png';
import bmi from '../assets/bmi.png';
import weather from '../assets/weather.png';
import './Projects.css';

const teamProjects = [
  {
    title: 'EFarming',
    description: 'Developed a Python-based platform where farmers can list and sell their produce online, enabling efficient transactions for 100+ potential product listings',
    img: efarming,
    repoLink: 'https://github.com/Karthik564125/EFarming',
  },
  {
    title: 'Lifestyle Management',
    description: 'Developed a personalized web application serving users, delivering tailored health recommendations on BMI.',
    img: bmi,
    repoLink: 'https://github.com/bhavana050604/bmi',
  },
];

const soloProjects = [

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

      <h3 className="subsection-title">Team Tasks</h3>
      <div className="projects-container">
        {teamProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
          </div>
        ))}
      </div>

      <h3 className="subsection-title">Individual Projects</h3>
      <div className="projects-container">
        {soloProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
