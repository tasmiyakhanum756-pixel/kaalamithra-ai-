"use client";

import { useEffect, useRef } from "react";

export default function HeaderWavyBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      canvas!.width = parent.offsetWidth;
      canvas!.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Theme-aware colors
    const darkStops = [
      { pos: 0.0, color: [0, 212, 255] },    // cyan
      { pos: 0.3, color: [56, 189, 248] },    // light blue
      { pos: 0.55, color: [139, 92, 246] },   // purple
      { pos: 0.75, color: [168, 139, 250] },  // light purple
      { pos: 1.0, color: [0, 212, 255] },     // cyan
    ];

    const lightStops = [
      { pos: 0.0, color: [37, 99, 235] },     // blue
      { pos: 0.3, color: [59, 130, 246] },    // lighter blue
      { pos: 0.55, color: [139, 92, 246] },   // purple
      { pos: 0.75, color: [13, 148, 136] },   // teal
      { pos: 1.0, color: [37, 99, 235] },     // blue
    ];

    function colorAt(t: number, isDark: boolean) {
      const stops = isDark ? darkStops : lightStops;
      t = Math.max(0, Math.min(1, t));
      for (let i = 0; i < stops.length - 1; i++) {
        const a = stops[i];
        const b = stops[i + 1];
        if (t >= a.pos && t <= b.pos) {
          const localT = (t - a.pos) / (b.pos - a.pos);
          const r = a.color[0] + (b.color[0] - a.color[0]) * localT;
          const g = a.color[1] + (b.color[1] - a.color[1]) * localT;
          const bl = a.color[2] + (b.color[2] - a.color[2]) * localT;
          return `${r},${g},${bl}`;
        }
      }
      return stops[stops.length - 1].color.join(",");
    }

    function draw() {
      const width = canvas!.width;
      const height = canvas!.height;
      const isDark = document.documentElement.classList.contains("dark");

      ctx!.clearRect(0, 0, width, height);

      const COLS = Math.max(40, Math.floor(width / 12));
      const ROWS = Math.max(15, Math.floor(height / 14));
      const spacingX = width / COLS;
      const spacingY = height / ROWS;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const x = col * spacingX;
          const t = col / COLS;

          // Multi-wave motion
          const wave =
            Math.sin(t * 6 + time * 0.8 + row * 0.3) * 20 +
            Math.sin(t * 10 - time * 1.2 + row * 0.5) * 12 +
            Math.sin(row * 0.7 + time * 0.6) * 8;

          // Envelope - brighter in center
          const envelope = Math.exp(-Math.pow((t - 0.5) * 2.8, 2)) * 1.2 + 0.3;
          const y = row * spacingY + wave * envelope;

          // Skip some dots for a particle effect
          const density = envelope;
          if (Math.random() > density * 0.85 + 0.05) continue;

          const dist = Math.abs(row - ROWS / 2) / (ROWS / 2);
          const alpha = Math.max(0, (1 - dist) * envelope * 0.6);
          if (alpha <= 0.02) continue;

          const size = 0.5 + envelope * 1.2 * (1 - dist * 0.5);
          const rgb = colorAt(t + Math.sin(time * 0.08) * 0.05, isDark);

          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${rgb},${alpha.toFixed(2)})`;
          ctx!.shadowColor = `rgba(${rgb},0.6)`;
          ctx!.shadowBlur = size * 4;
          ctx!.arc(x, y, size, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      ctx!.shadowBlur = 0;
      time += 0.015;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}