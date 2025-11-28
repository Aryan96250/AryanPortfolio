import React, { useEffect, useRef } from 'react';

export type WeatherType = 'RAIN' | 'SNOW' | 'SUNNY';

interface BackgroundCanvasProps {
  weather: WeatherType;
}

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ weather }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Single Real Mountain Video
  const MOUNTAIN_VIDEO = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-foggy-mountains-3309-large.mp4";

  // Effect to handle particle system (kept minimal for atmosphere)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- Minimal Atmosphere (Subtle Fog/Air) ---
    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        color: string;

        constructor(w: number, h: number) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.size = Math.random() * 2;
            this.color = `rgba(255, 255, 255, ${Math.random() * 0.1})`; // Very subtle mist
            this.life = Math.random() * 500 + 200;
            this.maxLife = this.life;
        }

        update(w: number, h: number) {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            if (this.x > w) this.x = 0;
            if (this.x < 0) this.x = w;
            if (this.y > h) this.y = 0;
            if (this.y < 0) this.y = h;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.globalAlpha = this.life / this.maxLife;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    let particles: Particle[] = [];
    const initParticles = () => {
        particles = [];
        // Low count for clear view
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(width, height));
        }
    };
    initParticles();

    let animationFrameId: number;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(width, height);
            particles[i].draw(ctx);
            if (particles[i].life <= 0) {
                particles[i] = new Particle(width, height);
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Cinematic Video Background */}
        <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
            style={{ 
                filter: 'brightness(0.9) contrast(1.1) saturate(1.1)' 
            }}
        >
            <source src={MOUNTAIN_VIDEO} type="video/mp4" />
        </video>
        
        {/* Subtle Gradient for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Particle Canvas for subtle atmosphere */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default BackgroundCanvas;