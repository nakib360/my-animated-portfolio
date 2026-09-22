import { useEffect, useRef } from "react";

/**
 * ParticleBackground
 * A gray canvas background with glowing purple particles
 * drifting and bouncing around. No connecting lines.
 *
 * Usage:
 *   <div className="relative">
 *     <ParticleBackground />
 *     <div className="relative z-10">... your content ...</div>
 *   </div>
 */
const ParticleBackground = ({
  particleCount = 90,
  particleColor = "168, 85, 247", // purple-500 as "r, g, b"
  speed = 0.4,
  background = "#e5e7eb", // tailwind gray-200
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: Math.random() * 1.8 + 0.6,
      }));
    };

    const step = () => {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, 0.9)`;
        ctx.shadowColor = `rgba(${particleColor}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationRef.current = requestAnimationFrame(step);
    };

    resize();
    createParticles();
    step();

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, particleColor, speed, background]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;