import React, { useEffect, useRef } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // --- VIDEO CONFIG ---
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.7; // Slow motion for cinematic feel
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- PARTICLE CLASSES ---

    class RainDrop {
      x: number;
      y: number;
      speed: number;
      len: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.speed = Math.random() * 15 + 10;
        this.len = Math.random() * 20 + 10;
      }
      
      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = -this.len;
          this.x = Math.random() * width;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(180, 20, 20, 0.4)'; // Blood Red
        ctx.lineWidth = 1.5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.len);
        ctx.stroke();
      }
    }

    class FireParticle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        
        constructor(x: number, y: number, angle: number) {
            this.x = x;
            this.y = y;
            const speed = Math.random() * 6 + 4;
            const spread = (Math.random() - 0.5) * 0.5;
            this.vx = Math.cos(angle + spread) * speed;
            this.vy = Math.sin(angle + spread) * speed;
            this.life = Math.random() * 40 + 20;
            this.maxLife = this.life;
            this.size = Math.random() * 20 + 10;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy -= 0.1; // Rise up
            this.life--;
            this.size *= 0.95;
        }

        draw(ctx: CanvasRenderingContext2D) {
            const alpha = this.life / this.maxLife;
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, `rgba(255, 255, 220, ${alpha})`); 
            gradient.addColorStop(0.3, `rgba(255, 150, 0, ${alpha})`); 
            gradient.addColorStop(1, `rgba(50, 0, 0, 0)`); 

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class Wyvern {
        x: number;
        y: number;
        size: number;
        t: number;
        fireCooldown: number;
        direction: number; // 1 or -1

        constructor() {
            this.x = width * 0.8;
            this.y = height * 0.3;
            this.size = 1;
            this.t = 0;
            this.fireCooldown = 200;
            this.direction = -1;
        }

        update() {
            this.t += 0.02;
            
            // Hover motion
            this.y += Math.sin(this.t) * 0.5;
            
            // Slow Drift
            this.x += Math.sin(this.t * 0.5) * 1; 

            // Fire Logic
            if (Math.random() < 0.005) {
                this.fireCooldown = 60; // Breath fire duration
            }
            
            if (this.fireCooldown > 0) {
                this.fireCooldown--;
                // Spawn fire particles from "mouth"
                const mouthX = this.x - 40;
                const mouthY = this.y + 10;
                for(let i=0; i<4; i++) {
                    fireParticles.push(new FireParticle(mouthX, mouthY, Math.PI + 0.2));
                }
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.save();
            ctx.translate(this.x, this.y);
            // Flip if needed (currently facing left)
            const scale = 1.2;
            ctx.scale(scale, scale);

            // --- DRAW WYVERN (Silhouette + Lighting) ---
            
            // Wings
            const wingFlap = Math.sin(this.t * 2) * 20;
            ctx.fillStyle = '#050a05'; // Dark body
            ctx.beginPath();
            // Left Wing
            ctx.moveTo(10, -10);
            ctx.quadraticCurveTo(50, -60 + wingFlap, 120, -40 + wingFlap); 
            ctx.quadraticCurveTo(80, 0 + wingFlap, 20, 10);
            ctx.fill();
            
            // Body
            const grad = ctx.createLinearGradient(-50, -20, 50, 20);
            grad.addColorStop(0, '#000');
            grad.addColorStop(0.5, '#1a1a1a');
            grad.addColorStop(1, '#000');
            ctx.fillStyle = grad;
            
            ctx.beginPath();
            ctx.ellipse(0, 0, 50, 25, 0, 0, Math.PI * 2);
            ctx.fill();

            // Head
            ctx.beginPath();
            ctx.moveTo(-50, -10);
            ctx.lineTo(-80, 5); // Snout
            ctx.lineTo(-50, 15); // Jaw
            ctx.fill();

            // Horns
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-60, -8);
            ctx.lineTo(-70, -25);
            ctx.stroke();

            // Glowing Eye
            ctx.fillStyle = this.fireCooldown > 0 ? '#ffaa00' : '#ff0000';
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(-65, -2, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Fire Light Reflection on Body
            if (this.fireCooldown > 0) {
                ctx.fillStyle = 'rgba(255, 100, 0, 0.2)';
                ctx.beginPath();
                ctx.ellipse(-40, 5, 20, 15, 0, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }
    }

    // --- INSTANTIATION ---
    const rain = Array.from({length: 100}, () => new RainDrop());
    const fireParticles: FireParticle[] = [];
    const wyvern = new Wyvern();

    // --- ANIMATION LOOP ---
    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Rain
        rain.forEach(drop => {
            drop.update();
            drop.draw(ctx);
        });

        // 2. Draw Wyvern
        wyvern.update();
        wyvern.draw(ctx);

        // 3. Draw Fire
        ctx.globalCompositeOperation = 'lighter';
        for (let i = fireParticles.length - 1; i >= 0; i--) {
            fireParticles[i].update();
            fireParticles[i].draw(ctx);
            if (fireParticles[i].life <= 0) fireParticles.splice(i, 1);
        }
        ctx.globalCompositeOperation = 'source-over';

        // 4. Fog/Vignette Overlay
        const grad = ctx.createLinearGradient(0, height, 0, 0);
        grad.addColorStop(0, 'rgba(0, 5, 0, 0.9)'); // Ground fog
        grad.addColorStop(0.3, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)'); // Sky dark
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Background Video */}
        <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[30%] contrast-125"
        >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-foggy-forest-with-trees-overhead-view-30472-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 mix-blend-multiply"></div>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default BackgroundCanvas;