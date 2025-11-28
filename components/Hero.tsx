import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-secondary font-medium tracking-wider text-sm uppercase">Welcome to my portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-400 font-light">
              {PERSONAL_INFO.role}
            </p>
          </div>
          
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mx-auto md:mx-0">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
            >
              Contact Me
            </a>
            <button 
              className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all hover:-translate-y-1 flex items-center gap-2"
              onClick={() => alert('Resume download would be triggered here.')}
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          <div className="flex flex-col gap-3 text-slate-400 text-sm pt-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
             <div className="flex gap-6 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all"
                  aria-label={link.platform}
                >
                  {link.icon === 'Linkedin' && <Linkedin size={20} />}
                  {link.icon === 'Github' && <Github size={20} />}
                  {link.icon === 'Mail' && <Mail size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Code Block / Visual */}
        <div className="flex-1 w-full max-w-lg relative hidden md:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-secondary">const</span> <span className="text-yellow-300">developer</span> = {'{'}
                  {'\n'}  name: <span className="text-green-400">"{PERSONAL_INFO.name}"</span>,
                  {'\n'}  skills: [<span className="text-green-400">"Angular"</span>, <span className="text-green-400">"React Native"</span>, <span className="text-green-400">"Vue"</span>],
                  {'\n'}  hardWorker: <span className="text-primary">true</span>,
                  {'\n'}  problemSolver: <span className="text-primary">true</span>,
                  {'\n'}  hireable: <span className="text-primary">true</span>
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;