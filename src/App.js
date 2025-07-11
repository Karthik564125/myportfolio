import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './Sections/Home';
import Resume from './Sections/Resume';
import Education from './Sections/Education';
import Achievements from './Sections/Achievements';
import Projects from './Sections/Projects'; // ✅ still include
import Contact from './Sections/Contact';
import TechStack from './Sections/TechStack';


import './App.css';

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
       {/* ✅ Just place it here like a normal section */}
      <Contact />
    </div>
  );
}

export default App;
