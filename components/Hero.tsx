import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { WeatherType } from './BackgroundCanvas';

interface HeroProps {
  weather?: WeatherType;
}

const Hero: React.FC<HeroProps> = ({ weather }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 z-10">
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative">
        <div className="inline-block mb-8 animate-fade-in">
            <span className="px-6 py-2 rounded-full glass-panel text-white text-xs font-bold tracking-[0.3em] uppercase">
                Alpine Expedition Mode
            </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight text-shadow-lg text-white animate-fade-in">
          Aryan <span className="text-accent italic font-serif">Chauhan</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-8 max-w-3xl mx-auto text-shadow font-sans">
           Software Developer <span className="text-accent mx-2">•</span> Creating Digital Landscapes
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in">
            <a href="#projects" className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all flex items-center gap-3">
                <span>Explore Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-accent/80 hover:bg-accent text-black font-bold rounded-full transition-all shadow-lg border border-transparent">
                Get in Touch
            </a>
        </div>

        <div className="flex justify-center gap-8 animate-fade-in">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-all hover:scale-110 drop-shadow-md bg-black/20 p-3 rounded-full hover:bg-black/40"
              >
                {link.icon === 'Linkedin' && <Linkedin size={24} />}
                {link.icon === 'Github' && <Github size={24} />}
                {link.icon === 'Mail' && <Mail size={24} />}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;