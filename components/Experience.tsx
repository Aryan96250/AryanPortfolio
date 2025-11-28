import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-horror text-white mb-4 drop-shadow-[0_2px_4px_black]">
            War <span className="text-green-600">Stories</span>
          </h2>
          <p className="text-slate-400 uppercase tracking-widest text-sm">Professional Experience</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-900 via-blood to-green-900 md:-translate-x-1/2 opacity-50"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-black border-2 border-blood shadow-[0_0_10px_#ef4444] md:-translate-x-1/2 mt-1.5 z-10 group-hover:scale-125 transition-transform"></div>

              <div className="flex-1 ml-10 md:ml-0">
                <div className="glass-jungle p-8 rounded-3xl relative overflow-hidden group-hover:border-red-500/40 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Briefcase size={60} className="text-green-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 font-display">{job.role}</h3>
                  <h4 className="text-xl text-green-500 font-medium mb-4">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-red-500" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-red-500" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_5px_red]"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;