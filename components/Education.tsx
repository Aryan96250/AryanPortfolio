import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-secondary/10"></div>
               
               <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-secondary border border-slate-700">
                  <GraduationCap size={24} />
               </div>

               <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
               <p className="text-slate-300 font-medium mb-1">{edu.institution}</p>
               <p className="text-slate-500 text-sm mb-4">{edu.location} | {edu.period}</p>
               
               <div className="inline-flex items-center gap-2 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700 text-sm text-primary">
                  <Award size={14} />
                  <span>{edu.score}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;