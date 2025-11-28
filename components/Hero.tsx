import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400 tracking-wide">Available for Work</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-6 leading-tight">
            Building the <br />
            <span className="text-gradient">Digital Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 font-light">
            I am <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. 
            I engineer scalable <span className="text-primary">web & mobile</span> applications 
            with a focus on performance and blockchain integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-dark font-bold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label={link.platform}
              >
                {link.icon === 'Linkedin' && <Linkedin size={28} />}
                {link.icon === 'Github' && <Github size={28} />}
                {link.icon === 'Mail' && <Mail size={28} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;