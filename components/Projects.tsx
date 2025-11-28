import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              A showcase of my recent work in AI, Blockchain, and Full-stack development.
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mediaCount = project.media.length;

  // Auto-slide logic
  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, [currentSlide]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setTimeout(() => {
      nextSlide();
    }, 4000); 
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

  // Play video when slide changes or card is active
  useEffect(() => {
    const currentMedia = project.media[currentSlide];
    if (currentMedia.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, [currentSlide]);

  return (
    <div 
      className="group relative rounded-3xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-black/40"
      onMouseEnter={() => {
        setIsHovered(true);
        stopSlideTimer();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startSlideTimer();
      }}
    >
      {/* Media Carousel Container */}
      <div className="relative h-64 md:h-72 w-full overflow-hidden bg-black">
        
        {project.media.map((item, index) => (
           <div 
             key={index}
             className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
           >
             {item.type === 'video' ? (
                <video
                  ref={index === currentSlide ? videoRef : null}
                  src={item.url}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                />
             ) : (
                <img 
                  src={item.url} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90"
                />
             )}
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {project.media.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault(); 
                setCurrentSlide(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary w-6 shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-white/30 hover:bg-white'}`}
            />
          ))}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
           <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
             {project.category}
           </span>
        </div>

        {/* Slide Controls (Visible on Hover) */}
        <div className={`absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
           <button onClick={(e) => { e.preventDefault(); prevSlide(); }} className="p-2 rounded-full bg-black/60 hover:bg-primary/80 text-white backdrop-blur-sm pointer-events-auto transition-colors border border-white/10">
             <ChevronLeft size={20} />
           </button>
           <button onClick={(e) => { e.preventDefault(); nextSlide(); }} className="p-2 rounded-full bg-black/60 hover:bg-primary/80 text-white backdrop-blur-sm pointer-events-auto transition-colors border border-white/10">
             <ChevronRight size={20} />
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col relative z-10 bg-transparent">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-display">
            {project.title}
          </h3>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-primary hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {project.description.map((desc, i) => (
            <p key={i} className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-3 hover:border-primary transition-colors">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-medium text-secondary bg-secondary/5 px-3 py-1 rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;