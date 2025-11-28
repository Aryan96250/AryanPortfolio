import React, { useEffect, useRef } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency on base
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // --- CONFIGURATION ---
    const DRAGON_COUNT = 2; // As requested
    const FOG_DENSITY = 30;
    const ASH_DENSITY = 50;

    // --- STATE ---
    let isDragging = false;
    let isHovering = false;
    const mouse = { x: width / 2, y: height / 2 };

    // --- EVENT LISTENERS ---
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      isHovering = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') !== null || target.closest('button') !== null;
    };

    const handleMouseDown = () => { isDragging = true; };
    const handleMouseUp = () => { isDragging = false; };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // --- CLASSES ---

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      color: string;
      decay: number;

      constructor(x: number, y: number, type: 'ash' | 'fire' | 'spark') {
        this.x = x;
        this.y = y;
        
        if (type === 'ash') {
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() * 0.5) + 0.2;
          this.life = Math.random() * 200 + 100;
          this.size = Math.random() * 2;
          this.color = `rgba(150, 150, 150, ${Math.random() * 0.3})`;
          this.decay = 0.5;
        } else if (type === 'fire') {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 3 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.life = 50;
          this.size = Math.random() * 8 + 4;
          this.color = ''; // Dynamic
          this.decay = 1;
        } else { // Spark
          this.vx = (Math.random() - 0.5) * 10;
          this.vy = (Math.random() - 0.5) * 10;
          this.life = 20;
          this.size = Math.random() * 2 + 1;
          this.color = '#fff';
          this.decay = 2;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.size *= 0.95;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class FireBreath extends Particle {
      hue: number;
      
      constructor(x: number, y: number, angle: number, speed: number) {
        super(x, y, 'fire');
        const spread = (Math.random() - 0.5) * 0.3;
        this.vx = Math.cos(angle + spread) * speed;
        this.vy = Math.sin(angle + spread) * speed;
        this.hue = Math.random() > 0.5 ? 0 : 270; // Red or Purple
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / 50;
        // Neon Horror Colors: Red to Purple
        const color = `hsla(${this.hue + Math.random()*30}, 100%, 50%, ${alpha})`;
        ctx.fillStyle = color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Fog {
      x: number;
      y: number;
      size: number;
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 300 + 200;
        this.speed = Math.random() * 0.2 + 0.1;
      }

      update() {
        this.x -= this.speed;
        if (this.x < -this.size) this.x = width + this.size;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(20, 0, 0, 0.05)'); // Very faint blood red mist
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class HorrorDragon {
      segments: {x: number, y: number}[];
      angle: number;
      speed: number;
      id: number;
      
      constructor(id: number) {
        this.id = id;
        this.segments = [];
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        for (let i = 0; i < 30; i++) {
          this.segments.push({ x: startX, y: startY + i * 10 });
        }
        this.angle = 0;
        this.speed = 0;
      }

      update(others: HorrorDragon[]) {
        const head = this.segments[0];

        // --- BEHAVIOR AI ---
        let targetX = mouse.x;
        let targetY = mouse.y;
        
        // HUNT MODE (Dragging): Direct aggressive chase
        if (isDragging) {
          this.speed = 8 + Math.random() * 2;
        } 
        // STALK MODE: Circle the mouse at a distance
        else {
          const time = Date.now() * 0.001;
          const offset = this.id * Math.PI; // Separate the two dragons
          const radius = 200 + Math.sin(time) * 50;
          targetX = mouse.x + Math.cos(time + offset) * radius;
          targetY = mouse.y + Math.sin(time + offset) * radius;
          this.speed = 4;
        }

        // Steering
        const dx = targetX - head.x;
        const dy = targetY - head.y;
        const targetAngle = Math.atan2(dy, dx);
        
        // Smooth rotation
        let diff = targetAngle - this.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.angle += diff * 0.05;

        // Move Head
        head.x += Math.cos(this.angle) * this.speed;
        head.y += Math.sin(this.angle) * this.speed;

        // Inverse Kinematics for Body
        for (let i = 1; i < this.segments.length; i++) {
          const curr = this.segments[i];
          const prev = this.segments[i - 1];
          const dist = Math.sqrt((curr.x - prev.x) ** 2 + (curr.y - prev.y) ** 2);
          const targetDist = 12;
          if (dist > targetDist) {
             const ratio = (dist - targetDist) / dist;
             curr.x += (prev.x - curr.x) * ratio * 0.8; // Stiff movement
             curr.y += (prev.y - curr.y) * ratio * 0.8;
          }
        }

        // Fire Breath Trigger
        if (isDragging || isHovering || Math.random() < 0.02) {
           this.breatheFire();
        }
      }

      breatheFire() {
        const head = this.segments[0];
        const mouthX = head.x + Math.cos(this.angle) * 20;
        const mouthY = head.y + Math.sin(this.angle) * 20;
        
        // Emit 3 particles per frame
        for (let i = 0; i < 3; i++) {
            fireParticles.push(new FireBreath(mouthX, mouthY, this.angle, this.speed + 8));
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw Spines/Body
        ctx.beginPath();
        for (let i = 0; i < this.segments.length; i++) {
            const p = this.segments[i];
            const size = (30 - i) * 0.8;
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
            
            // Draw Spike
            if (i % 3 === 0 && i < 20) {
                const perp = Math.atan2(this.segments[i-1]?.y - p.y || 0, this.segments[i-1]?.x - p.x || 0) + Math.PI/2;
                const spikeLen = 20;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(perp);
                ctx.fillStyle = '#111';
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.lineTo(5, -size - spikeLen);
                ctx.lineTo(-5, -size - spikeLen);
                ctx.fill();
                ctx.restore();
            }
        }
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#050505'; // Almost black
        ctx.stroke();
        
        // Inner Glow Skeleton
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#220000'; // Blood red core
        ctx.stroke();

        // Draw Head
        const head = this.segments[0];
        ctx.save();
        ctx.translate(head.x, head.y);
        ctx.rotate(this.angle);
        
        // Skull Shape
        ctx.fillStyle = '#080808';
        ctx.beginPath();
        ctx.moveTo(15, 0);
        ctx.lineTo(-10, 15);
        ctx.lineTo(-10, -15);
        ctx.fill();
        
        // Glowing Eyes
        ctx.shadowBlur = 15;
        ctx.shadowColor = isDragging ? '#ff0000' : '#ffff00';
        ctx.fillStyle = isDragging ? '#ff0000' : '#ffff00';
        ctx.beginPath();
        ctx.arc(5, -6, 3, 0, Math.PI * 2); // Left
        ctx.arc(5, 6, 3, 0, Math.PI * 2);  // Right
        ctx.fill();
        
        ctx.restore();
      }
    }

    // --- INSTANTIATION ---
    const dragons = Array.from({ length: DRAGON_COUNT }, (_, i) => new HorrorDragon(i));
    const fogLayers = Array.from({ length: FOG_DENSITY }, () => new Fog());
    const ashes: Particle[] = Array.from({ length: ASH_DENSITY }, () => new Particle(Math.random() * width, Math.random() * height, 'ash'));
    const fireParticles: FireBreath[] = [];

    // --- ANIMATION LOOP ---
    function animate() {
      if (!ctx) return;
      
      // Clear Screen with Motion Blur Trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // High trails
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Background Fog
      fogLayers.forEach(fog => {
          fog.update();
          fog.draw(ctx);
      });

      // 2. Draw Ash
      ashes.forEach(ash => {
          ash.update();
          ash.draw(ctx);
          // Reset ash
          if (ash.life <= 0 || ash.y > height) {
              ash.y = -10;
              ash.life = Math.random() * 200 + 100;
              ash.x = Math.random() * width;
          }
      });

      // 3. Update & Draw Fire Particles
      for (let i = fireParticles.length - 1; i >= 0; i--) {
          const p = fireParticles[i];
          p.update();
          p.draw(ctx);
          if (p.life <= 0) fireParticles.splice(i, 1);
      }

      // 4. Update & Draw Dragons
      dragons.forEach(d => {
          d.update(dragons);
          d.draw(ctx);
      });

      // 5. Cinematic Vignette
      const grad = ctx.createRadialGradient(width/2, height/2, height * 0.4, width/2, height/2, height);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(1, 'rgba(0,0,0,0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BackgroundCanvas;