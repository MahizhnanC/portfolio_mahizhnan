import { useEffect, useRef, useMemo } from 'react'

const ParticleHero = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)

  const particleCount = useMemo(() => {
    // Reduce particles on mobile for better performance
    return window.innerWidth < 768 ? 60 : 120
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * height
      }

      reset() {
        this.x = Math.random() * width
        this.y = -10
        this.speed = 0.5 + Math.random() * 1
        this.size = 1 + Math.random() * 2
        this.opacity = 0.3 + Math.random() * 0.5
      }

      update() {
        this.y += this.speed
        
        // Mouse interaction
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          this.x -= (dx / distance) * force * 2
          this.y -= (dy / distance) * force * 2
        }

        if (this.y > height + 10) {
          this.reset()
        }

        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle())

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      particlesRef.current.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default ParticleHero
