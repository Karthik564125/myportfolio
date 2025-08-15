import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Sections/PortfolioStyles.css';

// Import your components and sections
import Navbar from './components/Navbar';
import Home from './Sections/Home';
import Resume from './Sections/Resume';
import Education from './Sections/Education';
import Achievements from './Sections/Achievements';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import TechStack from './Sections/TechStack';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Resume />
      <Education />
      <Achievements />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
