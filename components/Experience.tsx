import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-900 -translate-x-1/2 mt-1.5 z-10 hidden md:block"></div>

              {/* Content Card */}
              <div className="flex-1">
                <div className={`bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors shadow-lg group`}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                      <p className="text-secondary font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
                      <Calendar size={14} />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
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