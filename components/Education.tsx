import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const edu = EDUCATION[0];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Education</h2>
          <p className="text-slate-400">Academic background and qualifications.</p>
        </div>

        <div className="max-w-3xl mx-auto">
           <div className="glass-card bg-black/40 rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/10">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-secondary/20 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 relative z-10">
                 <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-secondary shadow-xl shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap size={40} />
                 </div>
                 
                 <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-primary font-medium mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 mt-4">
                       <span>{edu.location}</span>
                       <span>•</span>
                       <span>{edu.period}</span>
                    </div>
                 </div>

                 <div className="bg-black/50 backdrop-blur px-6 py-3 rounded-xl border border-white/10 text-center shrink-0">
                    <Award size={24} className="text-yellow-400 mx-auto mb-1" />
                    <p className="text-sm text-slate-400">CGPA</p>
                    <p className="text-lg font-bold text-white">6.8/10</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Education;