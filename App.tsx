import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundCanvas, { WeatherType } from './components/BackgroundCanvas';

const App: React.FC = () => {
  // Fixed state for consistent Mountain theme
  const [weather] = useState<WeatherType>('SUNNY'); 

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 relative overflow-hidden theme-sunny`}>
      
      {/* Background handles the video */}
      <BackgroundCanvas weather={weather} />
      
      <Navbar weather={weather} />
      
      <main className="relative z-10 transition-colors duration-1000">
        <Hero weather={weather} />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      
      <div className="relative z-10">
        <Contact />
      </div>
    </div>
  );
};

export default App;