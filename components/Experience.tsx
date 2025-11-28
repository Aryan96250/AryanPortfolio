import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white text-shadow">
            My <span className="text-accent italic font-serif">Journey</span>
          </h2>
          <p className="text-white/70 uppercase tracking-widest text-sm text-shadow-sm">Professional Experience</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:-translate-x-1/2"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)] md:-translate-x-1/2 mt-1.5 z-10"></div>

              <div className="flex-1 ml-10 md:ml-0">
                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Briefcase size={80} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 font-display">{job.role}</h3>
                  <h4 className="text-xl text-accent font-medium mb-4 italic">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-white/80 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
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