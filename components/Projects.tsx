import React, { useRef } from 'react';
import { ExternalLink, Layers, Play } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              A selection of my recent work in AI, Blockchain, and Full-stack development.
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="group relative rounded-3xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-900">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" // Fallback poster
          />
        ) : (
          // Fallback abstract gradient if no video
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-800 group-hover:to-primary/20 transition-all duration-500 flex items-center justify-center">
             <Layers size={48} className="text-slate-600 group-hover:text-primary transition-colors" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        <div className="absolute top-4 left-4">
           <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
             {project.category}
           </span>
        </div>

        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur shadow-lg shadow-primary/40">
                <Play size={20} fill="white" />
             </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-display">
            {project.title}
          </h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {project.description.map((desc, i) => (
            <p key={i} className="text-slate-400 text-sm leading-relaxed">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;