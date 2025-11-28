import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 z-10">
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative">
        <div className="inline-block mb-6 animate-float-slow">
            <span className="px-6 py-2 rounded-full bg-black/60 border border-red-900/50 text-red-500 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(138,3,3,0.4)]">
                System Compromised // Horror Mode Active
            </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-horror text-white mb-6 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
          Aryan <span className="text-blood animate-pulse">Chauhan</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-display text-slate-300 mb-8 max-w-3xl mx-auto drop-shadow-md">
           Software Developer <span className="text-green-600">|</span> Angular & Ionic Specialist
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light mix-blend-lighten">
           Building scalable, high-performance applications in the digital wild. Specializing in secure blockchain integrations and immersive frontend experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#projects" className="group px-8 py-4 bg-blood hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(138,3,3,0.5)] flex items-center gap-3">
                <span>View Projects</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 glass-jungle text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Contact Protocol
            </a>
        </div>

        <div className="mt-16 flex justify-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-red-500 transition-all hover:scale-125 hover:drop-shadow-[0_0_10px_#ff0000]"
              >
                {link.icon === 'Linkedin' && <Linkedin size={30} />}
                {link.icon === 'Github' && <Github size={30} />}
                {link.icon === 'Mail' && <Mail size={30} />}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;