import { useEffect, useRef } from "react";

export default function RefinedBackgroundAtmosphere({ className = "", intensity = 1.0 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handlePointerMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 1. A few small, slowly moving particles (25-35 particles)
    const particleCount = Math.floor(Math.min(32, width > 768 ? 32 : 18));
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.6,
          baseAlpha: Math.random() * 0.35 + 0.15,
          alpha: 0.2,
          speedX: (Math.random() - 0.5) * 0.22,
          speedY: (Math.random() - 0.5) * 0.22 - 0.08, // gentle upward drift
          pulseSpeed: Math.random() * 0.012 + 0.006,
          pulseOffset: Math.random() * Math.PI * 2,
          color:
            i % 3 === 0
              ? "rgba(185, 168, 255," // lavender
              : i % 3 === 1
              ? "rgba(49, 91, 255," // electric blue
              : "rgba(213, 244, 91,", // soft lime hint
        });
      }
    };

    initParticles();

    // 2. Slow harmonic light formations (Orbs)
    const orbs = [
      {
        baseX: width * 0.25,
        baseY: height * 0.35,
        radius: Math.min(width, height) * 0.52,
        colorStart: "rgba(37, 99, 235, 0.16)", // Cobalt blue
        colorEnd: "rgba(37, 99, 235, 0)",
        freqX: 0.0004,
        freqY: 0.0005,
        rangeX: 80,
        rangeY: 60,
      },
      {
        baseX: width * 0.75,
        baseY: height * 0.45,
        radius: Math.min(width, height) * 0.58,
        colorStart: "rgba(124, 58, 237, 0.14)", // Violet / Purple
        colorEnd: "rgba(124, 58, 237, 0)",
        freqX: 0.00035,
        freqY: 0.00045,
        rangeX: 90,
        rangeY: 70,
      },
      {
        baseX: width * 0.5,
        baseY: height * 0.75,
        radius: Math.min(width, height) * 0.48,
        colorStart: "rgba(79, 70, 229, 0.11)", // Indigo
        colorEnd: "rgba(79, 70, 229, 0)",
        freqX: 0.0005,
        freqY: 0.0003,
        rangeX: 70,
        rangeY: 50,
      },
    ];

    // 3. Thin, elegant curved light trails (bezier trails)
    const trails = [
      {
        points: [
          { x: 0.05, y: 0.3 },
          { x: 0.35, y: 0.18 },
          { x: 0.65, y: 0.45 },
          { x: 0.95, y: 0.28 },
        ],
        colorStart: "rgba(49, 91, 255, 0)",
        colorMid: "rgba(139, 92, 246, 0.25)",
        colorEnd: "rgba(49, 91, 255, 0)",
        width: 1.2,
        driftSpeed: 0.00035,
        driftOffset: 0,
      },
      {
        points: [
          { x: 0.08, y: 0.65 },
          { x: 0.4, y: 0.75 },
          { x: 0.7, y: 0.55 },
          { x: 0.92, y: 0.8 },
        ],
        colorStart: "rgba(124, 58, 237, 0)",
        colorMid: "rgba(49, 91, 255, 0.22)",
        colorEnd: "rgba(124, 58, 237, 0)",
        width: 1.0,
        driftSpeed: 0.00028,
        driftOffset: 2.1,
      },
    ];

    let time = 0;

    const render = () => {
      time += 1;

      // Mouse lerp for gentle depth
      mouseX += (targetMouseX - mouseX) * 0.025;
      mouseY += (targetMouseY - mouseY) * 0.025;
      const parallaxX = (mouseX / width - 0.5) * 35;
      const parallaxY = (mouseY / height - 0.5) * 30;

      ctx.clearRect(0, 0, width, height);

      // Render Soft Blurred Light Formations (Gradients)
      ctx.globalCompositeOperation = "screen";

      orbs.forEach((orb) => {
        const ox = orb.baseX + Math.sin(time * orb.freqX) * orb.rangeX + parallaxX * 0.4;
        const oy = orb.baseY + Math.cos(time * orb.freqY) * orb.rangeY + parallaxY * 0.4;

        const radGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.radius);
        radGrad.addColorStop(0, orb.colorStart);
        radGrad.addColorStop(0.5, orb.colorStart.replace(/[\d.]+\)$/, (m) => `${parseFloat(m) * 0.4})`));
        radGrad.addColorStop(1, orb.colorEnd);

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Thin, Elegant Curved Light Trails
      ctx.globalCompositeOperation = "lighter";

      trails.forEach((trail) => {
        const sway = Math.sin(time * trail.driftSpeed + trail.driftOffset) * 25;
        const sway2 = Math.cos(time * trail.driftSpeed * 1.2 + trail.driftOffset) * 20;

        const p0 = { x: trail.points[0].x * width + parallaxX * 0.15, y: trail.points[0].y * height + sway };
        const p1 = { x: trail.points[1].x * width + parallaxX * 0.25, y: trail.points[1].y * height - sway2 };
        const p2 = { x: trail.points[2].x * width + parallaxX * 0.35, y: trail.points[2].y * height + sway2 };
        const p3 = { x: trail.points[3].x * width + parallaxX * 0.2, y: trail.points[3].y * height - sway };

        const grad = ctx.createLinearGradient(p0.x, p0.y, p3.x, p3.y);
        grad.addColorStop(0, trail.colorStart);
        grad.addColorStop(0.25, trail.colorMid);
        grad.addColorStop(0.75, trail.colorMid);
        grad.addColorStop(1, trail.colorEnd);

        ctx.strokeStyle = grad;
        ctx.lineWidth = trail.width;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.stroke();

        // Subtle glowing soft highlight along the trail
        ctx.strokeStyle = "rgba(185, 168, 255, 0.08)";
        ctx.lineWidth = trail.width * 3.5;
        ctx.stroke();
      });

      // Render Sparse, Subtle Floating Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.12;

        const px = p.x + parallaxX * (p.radius * 0.4);
        const py = p.y + parallaxY * (p.radius * 0.4);

        ctx.fillStyle = `${p.color} ${Math.max(0.04, p.alpha * intensity)})`;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      {/* Deep Navy to Charcoal Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -10%, #161D36 0%, #0D101C 55%, #080A12 100%)",
        }}
      />

      {/* Canvas rendering the soft orbs, curved light trails, and subtle particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Ultra-fine ambient grain for cinematic film texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('/assets/glass_grain_texture.png')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
