"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  animationDelay: number
  duration: number
  color: string
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateStars()
    }

    const generateStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 4000)
      const colors = ["#ffffff", "#00D4FF", "#38BDF8", "#8B5CF6", "#A78BFA", "#ffffff"]
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        animationDelay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        const twinkle = Math.sin((time / 1000 - star.animationDelay) * (Math.PI / star.duration))
        const alpha = Math.max(0.1, Math.min(1, star.opacity + twinkle * 0.5))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = alpha
        ctx.fill()

        // Add glow effect to larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = star.color
          ctx.globalAlpha = alpha * 0.15
          ctx.fill()
        }
      })

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}