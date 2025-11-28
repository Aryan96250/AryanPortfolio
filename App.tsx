import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundCanvas from './components/BackgroundCanvas';
import Lore from './components/Lore';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-slate-300 font-sans selection:bg-red-900 selection:text-white relative overflow-hidden">
      <BackgroundCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Lore />
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