import React, { useEffect, useRef } from 'react';

interface MistCanvasProps {
  reducedMotion?: boolean;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  vx: number;
  vy: number;
  phase: number;
  color: string;
}

export const MistCanvas: React.FC<MistCanvasProps> = ({ reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color tones inspired by the palette: Warm Ivory, Botanical green, Rose, Gold dew
    const colors = [
      'rgba(88, 107, 70, ',   // botanical green
      'rgba(217, 170, 69, ',  // golden yellow
      'rgba(213, 154, 165, ', // rose
      'rgba(120, 135, 100, ', // moss green
    ];

    const particleCount = Math.min(32, Math.floor(width / 45));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.03 + Math.random() * 0.05;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 20 + Math.random() * 80,
        baseRadius: 20 + Math.random() * 80,
        alpha: baseAlpha,
        baseAlpha,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.15 - Math.random() * 0.2, // soft drift upward
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;
    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + p.phase) * 0.2;
        p.y += p.vy;

        // Wrap around smoothly
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const currentAlpha = p.baseAlpha * (0.8 + 0.4 * Math.sin(time * 2 + p.phase));

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `${p.color}${currentAlpha})`);
        gradient.addColorStop(0.6, `${p.color}${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70"
      aria-hidden="true"
    />
  );
};
