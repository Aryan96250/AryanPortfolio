import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications focused on AI, Blockchain, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/10 flex flex-col">
              
              {/* Visual Header (Abstract) */}
              <div className="h-48 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                   <Layers size={64} className="text-secondary" />
                </div>
                <div className="absolute top-4 right-4 bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-6 flex-1">
                  {project.description.map((desc, i) => (
                     <p key={i} className="text-slate-400 text-sm line-clamp-2">
                       • {desc}
                     </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-slate-300 bg-slate-700/50 px-2 py-1 rounded-md border border-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;