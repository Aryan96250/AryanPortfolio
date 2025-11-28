import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
            Where I <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400">Professional journey and contributions.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:-translate-x-1/2"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-dark border-2 border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] md:-translate-x-1/2 mt-1.5 z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Content Card */}
              <div className="flex-1 ml-16 md:ml-0">
                <div className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 relative group-hover:-translate-y-1">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Briefcase size={40} className="text-primary" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                    <h4 className="text-xl text-primary font-medium mb-3">{job.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-secondary" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-secondary" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed group/item">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 group-hover/item:bg-primary transition-colors"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty Space for alignment */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;