import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-horror text-white mb-4">
             Mission <span className="text-blood">Reports</span>
          </h2>
          <p className="text-slate-400">Deployed Applications & Systems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mediaCount = project.media.length;

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, [currentSlide]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setTimeout(() => {
      nextSlide();
    }, 5000); 
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearTimeout(slideInterval.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaCount) % mediaCount);
  };

  useEffect(() => {
    const currentMedia = project.media[currentSlide];
    if (currentMedia.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Auto-play prevented"));
    }
  }, [currentSlide]);

  return (
    <div 
      className="group rounded-3xl overflow-hidden glass-jungle flex flex-col hover:border-red-600 transition-colors"
      onMouseEnter={stopSlideTimer}
      onMouseLeave={startSlideTimer}
    >
      <div className="relative h-64 bg-black overflow-hidden border-b border-green-900/50">
        {project.media.map((item, index) => (
           <div 
             key={index}
             className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
           >
             {item.type === 'video' ? (
                <video
                  ref={index === currentSlide ? videoRef : null}
                  src={item.url}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
             ) : (
                <img 
                  src={item.url} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80"
                />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           </div>
        ))}

        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
           <button onClick={(e) => { e.preventDefault(); prevSlide(); }} className="p-1 rounded-full bg-black/50 hover:bg-red-600 text-white transition-colors">
             <ChevronLeft size={16} />
           </button>
           <button onClick={(e) => { e.preventDefault(); nextSlide(); }} className="p-1 rounded-full bg-black/50 hover:bg-red-600 text-white transition-colors">
             <ChevronRight size={16} />
           </button>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors font-display mt-1">
                {project.title}
              </h3>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 hover:text-white bg-white/5 p-2 rounded-full hover:bg-red-600 transition-all"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {project.description.map((desc, i) => (
            <p key={i} className="text-slate-400 text-sm pl-3 border-l-2 border-green-900 group-hover:border-red-600 transition-colors">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-green-400 bg-green-900/20 px-3 py-1 rounded border border-green-900/30">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;