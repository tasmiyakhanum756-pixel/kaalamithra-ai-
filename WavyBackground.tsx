"use client";

import { useEffect, useRef } from "react";

export default function WavyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = 1;
    let animationId: number;
    let time = 0;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Dark mode color stops: cyan -> blue -> purple -> magenta -> cyan
    const darkStops = [
      { pos: 0.0, color: [0, 212, 255] },
      { pos: 0.3, color: [56, 189, 248] },
      { pos: 0.55, color: [139, 92, 246] },
      { pos: 0.75, color: [168, 139, 250] },
      { pos: 1.0, color: [0, 212, 255] },
    ];

    // Light mode color stops: blue -> indigo -> teal -> purple -> blue
    const lightStops = [
      { pos: 0.0, color: [37, 99, 235] },
      { pos: 0.3, color: [59, 130, 246] },
      { pos: 0.55, color: [13, 148, 136] },
      { pos: 0.75, color: [139, 92, 246] },
      { pos: 1.0, color: [37, 99, 235] },
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

    const COLS = 90;
    const ROWS = 40;

    function draw() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isDark = document.documentElement.classList.contains("dark");

      // Clear with transparent background so CSS gradient shows through
      ctx!.clearRect(0, 0, width, height);

      const spacingX = width / COLS;
      const spacingY = (height / ROWS) * 1.4;
      const baseY = height * 0.55;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const x = col * spacingX;
          const t = col / COLS;

          const wave =
            Math.sin(t * 6 + time * 0.6 + row * 0.25) * 40 +
            Math.sin(t * 12 - time * 0.9 + row * 0.4) * 18 +
            Math.sin(row * 0.5 + time * 0.4) * 10;

          const envelope = Math.exp(-Math.pow((t - 0.5) * 2.4, 2)) * 1.4 + 0.25;
          const y = baseY - (row - ROWS / 2) * spacingY * 0.35 + wave * envelope;

          const density = envelope;
          if (Math.random() > density * 0.9 + 0.05) continue;

          const dist = Math.abs(row - ROWS / 2) / (ROWS / 2);
          const maxAlpha = isDark ? 0.9 : 0.5;
          const alpha = Math.max(0, (1 - dist) * envelope * maxAlpha);
          if (alpha <= 0.02) continue;

          const size = 0.6 + envelope * 1.6 * (1 - dist * 0.6);
          const rgb = colorAt(t + Math.sin(time * 0.1) * 0.05, isDark);

          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${rgb},${alpha.toFixed(2)})`;
          ctx!.shadowColor = `rgba(${rgb},0.8)`;
          ctx!.shadowBlur = size * 3;
          ctx!.arc(x, y, size, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      ctx!.shadowBlur = 0;
      time += 0.012;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="wavy-background-canvas" />;
}
