import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white text-shadow">
             Selected <span className="text-accent italic font-serif">Works</span>
          </h2>
          <p className="text-white/70 text-shadow-sm">A collection of deployed applications.</p>
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
      className="group rounded-3xl overflow-hidden glass-panel flex flex-col transition-colors"
      onMouseEnter={stopSlideTimer}
      onMouseLeave={startSlideTimer}
    >
      <div className="relative h-64 bg-black/50 overflow-hidden border-b border-white/10">
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
                  className="w-full h-full object-cover"
                />
             ) : (
                <img 
                  src={item.url} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
             )}
           </div>
        ))}

        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
           <button onClick={(e) => { e.preventDefault(); prevSlide(); }} className="p-1.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
             <ChevronLeft size={16} />
           </button>
           <button onClick={(e) => { e.preventDefault(); nextSlide(); }} className="p-1.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-md">
             <ChevronRight size={16} />
           </button>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors font-display mt-1">
                {project.title}
              </h3>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/70 hover:text-white bg-white/10 p-2 rounded-full hover:bg-accent hover:text-black transition-all"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {project.description.map((desc, i) => (
            <p key={i} className="text-white/70 text-sm pl-3 border-l-2 border-white/10 group-hover:border-accent transition-colors">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;