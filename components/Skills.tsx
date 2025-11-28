import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Cpu, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-display font-bold text-white text-shadow">Technical <span className="text-accent italic font-serif">Arsenal</span></h2>
            <div className="grid gap-6">
              {SKILLS.map((group) => (
                <div key={group.category} className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white/90 mb-4 border-b border-white/10 pb-2 flex items-center gap-2 font-display">
                     {group.category.includes('Programming') && <Code2 size={20} className="text-accent"/>}
                     {group.category.includes('Frameworks') && <Cpu size={20} className="text-accent"/>}
                     {group.category.includes('Tools') && <Terminal size={20} className="text-accent"/>}
                     {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-white/5 text-white/80 border border-white/10 rounded-full hover:bg-accent hover:text-black hover:border-accent transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
             {/* Abstract Radar UI - Clean */}
             <div className="relative w-80 h-80 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="absolute w-full h-px bg-white/10 top-1/2 -translate-y-1/2"></div>
                <div className="absolute h-full w-px bg-white/10 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-[70%] h-[70%] border border-white/10 rounded-full"></div>
                <div className="absolute w-[40%] h-[40%] border border-white/10 rounded-full"></div>
                
                {/* Rotating scanner */}
                <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-spin origin-bottom-left rounded-tr-full" style={{left: '50%', top: '0%'}}></div>
                
                <div className="text-center z-10 p-6 glass-panel rounded-full">
                   <p className="text-4xl font-bold text-white font-display">3+</p>
                   <p className="text-xs text-accent tracking-widest uppercase font-bold">Years Experience</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;