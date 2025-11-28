import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Cpu, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes("Programming")) return <Code2 size={24} className="text-primary" />;
    if (category.includes("Frameworks")) return <Cpu size={24} className="text-secondary" />;
    return <Terminal size={24} className="text-green-400" />;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
              <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
              <p className="text-slate-400 text-lg">
                A comprehensive toolset for building modern, scalable, and secure applications.
              </p>
            </div>
            
            <div className="grid gap-6">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="glass-card bg-black/40 p-6 rounded-2xl hover:bg-black/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    {getIcon(skillGroup.category)}
                    <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 bg-black/50 text-slate-300 text-sm rounded-lg border border-white/10 hover:border-primary/50 transition-colors cursor-default hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            {/* Visual Representation Circular chart style */}
             <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-white/5 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-2 border-white/5 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-8 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
                      <span className="text-4xl font-bold text-white block drop-shadow-lg">3+</span>
                      <span className="text-slate-400 text-sm uppercase tracking-wider">Years Exp.</span>
                   </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-black/80 p-3 rounded-xl border border-white/10 shadow-lg backdrop-blur">
                    <span className="font-bold text-yellow-400">JS</span>
                </div>
                <div className="absolute bottom-10 right-0 bg-black/80 p-3 rounded-xl border border-white/10 shadow-lg backdrop-blur">
                    <span className="font-bold text-red-500">Angular</span>
                </div>
                 <div className="absolute bottom-10 left-0 bg-black/80 p-3 rounded-xl border border-white/10 shadow-lg backdrop-blur">
                    <span className="font-bold text-cyan-400">React</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;