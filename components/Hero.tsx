import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Cinematic Gradient to ensure text pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="text-sm font-bold text-white tracking-wide uppercase">Deploying Scalable Solutions</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Forging the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-[0_0_20px_rgba(234,88,12,0.6)]">
              Digital Frontier
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 font-light drop-shadow-lg shadow-black">
            I am <span className="text-white font-bold">{PERSONAL_INFO.name}</span>. 
            I engineer high-performance <span className="text-orange-400">blockchain & mobile</span> ecosystems 
            designed for the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Explore Projects</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-md border border-white/20"
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
                className="text-slate-400 hover:text-white transform hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
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