import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Cpu, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-horror text-white">Arsenal</h2>
            <div className="grid gap-6">
              {SKILLS.map((group) => (
                <div key={group.category} className="glass-jungle p-6 rounded-xl hover:bg-black/80 transition-colors">
                  <h3 className="text-xl font-bold text-green-500 mb-4 border-b border-green-900/50 pb-2 flex items-center gap-2">
                     {group.category.includes('Programming') && <Code2 size={20}/>}
                     {group.category.includes('Frameworks') && <Cpu size={20}/>}
                     {group.category.includes('Tools') && <Terminal size={20}/>}
                     {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-black/50 text-slate-300 border border-green-900/30 rounded hover:text-white hover:border-red-500 transition-colors cursor-crosshair">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
             {/* Spinning Radar UI */}
             <div className="relative w-80 h-80 rounded-full border border-green-900/30 bg-black/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(0,255,0,0.05)]">
                <div className="absolute w-full h-1 bg-green-900/20 top-1/2 -translate-y-1/2"></div>
                <div className="absolute h-full w-1 bg-green-900/20 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-spin origin-bottom-left" style={{left: '50%', top: '0%'}}></div>
                
                <div className="text-center z-10">
                   <p className="text-4xl font-bold text-white font-mono">3+</p>
                   <p className="text-xs text-red-500 tracking-widest uppercase">Years Active</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;