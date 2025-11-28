
import React, { useEffect, useRef, useState } from 'react';

type WeatherType = 'STORM' | 'SNOW' | 'SUNNY';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [weather, setWeather] = useState<WeatherType>('STORM');

  // Video Sources mapping
  const VIDEOS = {
    STORM: "https://assets.mixkit.co/videos/preview/mixkit-forest-fire-with-smoke-running-up-trees-31294-large.mp4",
    SNOW: "https://assets.mixkit.co/videos/preview/mixkit-winter-forest-with-snow-falling-25983-large.mp4",
    SUNNY: "https://assets.mixkit.co/videos/preview/mixkit-sun-rays-through-the-trees-in-a-forest-41386-large.mp4"
  };

  // Weather Cycle Logic
  useEffect(() => {
    const cycleWeather = () => {
      const weathers: WeatherType[] = ['STORM', 'SNOW', 'SUNNY'];
      const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
      setWeather(randomWeather);
    };

    // Initial Random
    cycleWeather();

    // Change every 20 seconds
    const interval = setInterval(cycleWeather, 20000);
    return () => clearInterval(interval);
  }, []);

  // Effect to handle particle system and video transitions
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

    // --- PARTICLE SYSTEM ---

    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        color: string;
        type: 'rain' | 'snow' | 'pollen' | 'ember';

        constructor(w: number, h: number, currentWeather: WeatherType) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            
            // Set type based on weather
            if (currentWeather === 'SNOW') {
                this.type = 'snow';
                this.vx = (Math.random() - 0.5) * 2; // Drift
                this.vy = Math.random() * 2 + 1; // Slow fall
                this.size = Math.random() * 3 + 1;
                this.color = `rgba(255, 255, 255, ${Math.random() * 0.8})`;
                this.life = 300;
            } else if (currentWeather === 'SUNNY') {
                this.type = 'pollen';
                this.vx = (Math.random() - 0.5) * 0.5; // Float
                this.vy = (Math.random() - 0.5) * 0.5; // Float
                this.size = Math.random() * 2;
                this.color = `rgba(255, 220, 150, ${Math.random() * 0.6})`; // Gold dust
                this.life = 200;
            } else {
                // STORM / DEFAULT
                const isEmber = Math.random() > 0.8;
                if (isEmber) {
                    this.type = 'ember';
                    this.y = h + 10;
                    this.vx = (Math.random() - 0.5) * 4;
                    this.vy = -(Math.random() * 4 + 2); // Rise fast
                    this.size = Math.random() * 2 + 0.5;
                    this.color = `rgba(255, ${Math.floor(Math.random() * 100)}, 0, ${Math.random()})`;
                    this.life = Math.random() * 50 + 20;
                } else {
                    this.type = 'rain';
                    this.vx = (Math.random() - 0.5) * 2;
                    this.vy = Math.random() * 20 + 15; // Fast rain
                    this.size = Math.random() * 2 + 1;
                    this.color = 'rgba(150, 170, 190, 0.5)';
                    this.life = 100;
                }
            }
            this.maxLife = this.life;
        }

        update(w: number, h: number) {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            // Wrap around logic
            if (this.type === 'rain' || this.type === 'snow') {
                if (this.y > h) {
                    this.y = -10;
                    this.x = Math.random() * w;
                }
            } else if (this.type === 'ember') {
               // Embers die
            } else if (this.type === 'pollen') {
                if (this.x > w) this.x = 0;
                if (this.x < 0) this.x = w;
                if (this.y > h) this.y = 0;
                if (this.y < 0) this.y = h;
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            
            if (this.type === 'rain') {
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.vx, this.y + this.vy * 1.5);
                ctx.stroke();
            } else if (this.type === 'snow') {
                ctx.shadowBlur = 5;
                ctx.shadowColor = 'white';
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            } else {
                ctx.globalAlpha = this.life / this.maxLife;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
    }

    let particles: Particle[] = [];
    
    // Initialize particles based on current weather
    const initParticles = () => {
        particles = [];
        const count = weather === 'STORM' ? 150 : weather === 'SNOW' ? 200 : 80;
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(width, height, weather));
        }
    };
    initParticles();

    let lightningTimer = 0;
    let flashOpacity = 0;
    let animationFrameId: number;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // --- WEATHER SPECIFIC OVERLAYS ---
        
        // 1. Lightning (Only in Storm)
        if (weather === 'STORM') {
            if (Math.random() < 0.005) { 
                lightningTimer = Math.floor(Math.random() * 10) + 5; 
            }
            if (lightningTimer > 0) {
                lightningTimer--;
                flashOpacity = Math.random() * 0.3;
                ctx.fillStyle = `rgba(255, 255, 255, ${flashOpacity})`;
                ctx.fillRect(0, 0, width, height);
            }
        }

        // 2. Sun Rays (Only in Sunny)
        if (weather === 'SUNNY') {
             const gradient = ctx.createLinearGradient(0, 0, width, height);
             gradient.addColorStop(0, 'rgba(255, 200, 100, 0.1)');
             gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
             ctx.fillStyle = gradient;
             ctx.fillRect(0,0, width, height);
        }

        // 3. Cold Overlay (Only in Snow)
        if (weather === 'SNOW') {
             ctx.fillStyle = 'rgba(0, 20, 50, 0.1)'; // Blue tint
             ctx.fillRect(0, 0, width, height);
        }

        // Update & Draw Particles
        ctx.globalCompositeOperation = 'screen';
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(width, height);
            particles[i].draw(ctx);
            
            // Respawn dead particles
            if (particles[i].life <= 0) {
                particles[i] = new Particle(width, height, weather);
            }
        }
        ctx.globalCompositeOperation = 'source-over';

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [weather]); // Re-run when weather changes

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black transition-all duration-1000">
        <video 
            ref={videoRef}
            key={weather} // Force reload on weather change
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ 
                filter: weather === 'STORM' ? 'brightness(0.7) contrast(1.2)' : 
                        weather === 'SNOW' ? 'brightness(0.9) hue-rotate(180deg) saturate(0.5)' : 
                        'brightness(1.1) saturate(1.2)' 
            }}
        >
            <source src={VIDEOS[weather]} type="video/mp4" />
        </video>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#000000_100%)] opacity-50"></div>
        
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default BackgroundCanvas;
