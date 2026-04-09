import React, { useRef, useEffect } from 'react'
import './SakuraFall.css'

const SakuraFall = ({ petalCount = 80 }) => {
  const canvasRef = useRef(null)
  const treesCanvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const tCanvas = treesCanvasRef.current
    if (!canvas || !tCanvas) return
    const ctx = canvas.getContext('2d')
    const tCtx = tCanvas.getContext('2d')
    let w, h
    let animationFrameId

    const drawTrees = (width, height, time) => {
      let seed = 42; // Stable PRNG seed each frame
      const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };

      tCtx.clearRect(0, 0, width, height)

      // Background shapes (Wavy ground)
      tCtx.fillStyle = 'rgba(255, 60, 80, 0.05)'
      tCtx.beginPath()
      tCtx.moveTo(0, height)
      tCtx.lineTo(0, height - height*0.15)
      tCtx.bezierCurveTo(width*0.3, height - height*0.25, width*0.7, height, width, height - height*0.1)
      tCtx.lineTo(width, height)
      tCtx.fill()

      tCtx.fillStyle = 'rgba(255, 60, 80, 0.08)'
      tCtx.beginPath()
      tCtx.moveTo(0, height)
      tCtx.lineTo(0, height - height*0.08)
      tCtx.bezierCurveTo(width*0.4, height + height*0.05, width*0.8, height - height*0.2, width, height - height*0.08)
      tCtx.lineTo(width, height)
      tCtx.fill()

      // Pagoda Silhouette
      const drawPagoda = (ctx, cx, bottomY, w, h) => {
        ctx.save()
        ctx.fillStyle = 'rgba(255, 120, 130, 0.25)'
        const levels = 5
        const levelH = h / (levels + 1)
        for (let i = 0; i < levels; i++) {
          const y = bottomY - (i * levelH)
          const roofW = w * (1 - (i * 0.15))
          if (i < levels - 1) {
            ctx.fillRect(cx - (roofW*0.4)/2, y - levelH, roofW*0.4, levelH)
          }
          ctx.beginPath()
          ctx.moveTo(cx - roofW/2, y)
          ctx.quadraticCurveTo(cx, y - roofW*0.05, cx + roofW/2, y)
          ctx.lineTo(cx + roofW*0.3, y - roofW*0.15)
          ctx.lineTo(cx + roofW*0.2, y - roofW*0.05)
          ctx.lineTo(cx - roofW*0.2, y - roofW*0.05)
          ctx.lineTo(cx - roofW*0.3, y - roofW*0.15)
          ctx.fill()
        }
        ctx.fillRect(cx - 2, bottomY - h + levelH - h*0.15, 4, h*0.15)
        ctx.restore()
      }
      drawPagoda(tCtx, width * 0.85, height * 0.95, width * 0.15, height * 0.6)

      // Solid Torii Gate with Glowing Sun
      const drawSolidTorii = (ctx, cx, bottomY, w, h) => {
        ctx.save()
        const grad = ctx.createRadialGradient(cx, bottomY - h*0.4, 0, cx, bottomY - h*0.4, h*1.2)
        grad.addColorStop(0, 'rgba(255, 60, 80, 0.3)')
        grad.addColorStop(1, 'rgba(14, 14, 14, 0)')
        ctx.fillStyle = grad
        ctx.fillRect(cx - h*1.5, bottomY - h*1.5, h*3, h*3)
        ctx.shadowColor = 'rgba(255, 30, 60, 0.9)'
        ctx.shadowBlur = 25
        ctx.fillStyle = '#ff1133'
        const topY = bottomY - h
        const pW = w * 0.08
        
        ctx.beginPath()
        ctx.moveTo(cx - w * 0.35 - pW/2, bottomY)
        ctx.lineTo(cx - w * 0.35 + pW/2, bottomY)
        ctx.lineTo(cx - w * 0.3 + pW/2, topY + h * 0.1)
        ctx.lineTo(cx - w * 0.3 - pW/2, topY + h * 0.1)
        ctx.fill()
        
        ctx.beginPath()
        ctx.moveTo(cx + w * 0.35 - pW/2, bottomY)
        ctx.lineTo(cx + w * 0.35 + pW/2, bottomY)
        ctx.lineTo(cx + w * 0.3 + pW/2, topY + h * 0.1)
        ctx.lineTo(cx + w * 0.3 - pW/2, topY + h * 0.1)
        ctx.fill()

        const nukiY = topY + h * 0.3
        ctx.fillRect(cx - w * 0.5, nukiY, w, h * 0.06)
        ctx.fillRect(cx - w * 0.5 - pW/2, nukiY - 2, pW/2, h * 0.06 + 4)
        ctx.fillRect(cx + w * 0.5, nukiY - 2, pW/2, h * 0.06 + 4)
        ctx.fillRect(cx - pW*0.4, topY + h * 0.08, pW*0.8, h * 0.22)
        ctx.fillRect(cx - w * 0.48, topY + h * 0.08, w*0.96, h * 0.06)

        ctx.beginPath()
        ctx.moveTo(cx - w * 0.5, topY + h * 0.08)
        ctx.quadraticCurveTo(cx, topY - h * 0.03, cx + w * 0.5, topY + h * 0.08)
        ctx.lineTo(cx + w * 0.5, topY + h * 0.01)
        ctx.quadraticCurveTo(cx, topY - h * 0.1, cx - w * 0.5, topY + h * 0.01)
        ctx.fill()
        ctx.restore()
      }

      // Solid Thick Swaying Trees with Blossoms
      const drawTree = (ctx, startX, startY, len, angle, depth, isLeft, timeOffset) => {
        ctx.beginPath()
        ctx.save()
        
        ctx.strokeStyle = depth < 3 ? '#5a3a3a' : '#3a2020' // Lighter branch colors!
        ctx.lineWidth = depth * 3 + 1
        ctx.lineCap = 'round'
        ctx.translate(startX, startY)
        
        // Sway animation powered by time and tree depth
        const sway = Math.sin(time + timeOffset + depth * 0.5) * (1.5 + (8 - depth) * 0.4)
        ctx.rotate((angle + sway) * Math.PI / 180)
        
        ctx.moveTo(0, 0)
        const bend = isLeft ? len * 0.15 : -len * 0.15
        ctx.quadraticCurveTo(bend, -len/2, 0, -len)
        ctx.stroke()

        if (depth === 0) {
          ctx.beginPath()
          ctx.fillStyle = random() > 0.6 ? '#fff0f3' : '#ff2a4b'
          ctx.arc(0, -len + (random()*10 - 5), random() * 5 + 4, 0, Math.PI * 2)
          ctx.fill()
          
          if(random() > 0.4) {
            ctx.beginPath()
            ctx.fillStyle = '#ff8fa3'
            ctx.arc((random()*10 - 5), -len-10, random() * 4 + 2, 0, Math.PI * 2)
            ctx.fill()
          }
          ctx.restore()
          return
        }

        drawTree(ctx, 0, -len, len * (0.75 + random() * 0.1), 15 + random() * 20, depth - 1, isLeft, timeOffset)
        drawTree(ctx, 0, -len, len * (0.75 + random() * 0.1), -15 - random() * 20, depth - 1, isLeft, timeOffset)
        
        if (random() > 0.3) {
          const dir = isLeft ? (30 + random() * 25) : (-30 - random() * 25)
          drawTree(ctx, bend*0.5, -len*0.8, len * 0.6, dir, depth - 1, isLeft, timeOffset)
        }

        ctx.restore()
      }

      // Bottom-Left Tree
      drawTree(tCtx, -width * 0.05, height * 1.05, height * 0.22, 20, 8, true, 0)
      // Bottom-Right Tree
      drawTree(tCtx, width * 1.05, height * 1.05, height * 0.22, -20, 8, false, 100)

      // Draw Torii Gate in front
      drawSolidTorii(tCtx, width / 2, height, height * 0.45, height * 0.45)
    }

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      tCanvas.width = w
      tCanvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    class Petal {
      constructor() {
        this.reset()
        this.y = Math.random() * h // Initial random y position
      }

      reset() {
        const side = Math.random() > 0.5
        // Outer 15% to guarantee a massive center void
        this.x = side ? (Math.random() * 0.15) * w : (0.85 + Math.random() * 0.15) * w
        this.y = -20 - Math.random() * 50
        this.z = Math.random() * 0.6 + 0.4
        this.vx = Math.random() * 1.5 - 0.75
        this.vy = Math.random() * 1.5 + 1.0
        this.size = (Math.random() * 8 + 6) * this.z
        this.rotation = Math.random() * 360
        this.rotationSpeed = (Math.random() * 2 - 1) * 0.05
        this.flip = Math.random()
        this.flipSpeed = (Math.random() * 0.05 + 0.01)
        this.swayAngle = Math.random() * Math.PI * 2
        this.swaySpeed = Math.random() * 0.02 + 0.01
        this.colorType = Math.random() > 0.5 ? '#ffb7c5' : '#ffcfda'
      }

      update() {
        this.x += this.vx + Math.sin(this.swayAngle) * 0.5
        this.y += this.vy
        this.rotation += this.rotationSpeed
        this.swayAngle += this.swaySpeed
        this.flip += this.flipSpeed

        if (this.y > h + 20 || this.x < -20 || this.x > w + 20) {
          this.reset()
        }
      }

      draw(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        
        // 3D flip effect
        const scale = Math.abs(Math.cos(this.flip))
        ctx.scale(scale, 1)

        ctx.beginPath()
        
        // Draw petal shape
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-this.size, -this.size * 1.5, -this.size * 1.2, this.size * 0.5, 0, this.size)
        ctx.bezierCurveTo(this.size * 1.2, this.size * 0.5, this.size, -this.size * 1.5, 0, 0)
        
        ctx.fillStyle = this.colorType
        ctx.globalAlpha = this.z
        ctx.fill()
        
        ctx.restore()
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal())

    let timeElapsed = 0
    const animate = () => {
      timeElapsed += 0.015

      ctx.clearRect(0, 0, w, h)
      petals.forEach(petal => {
        petal.update()
        petal.draw(ctx)
      })

      // Redraw animated landscape every frame
      drawTrees(w, h, timeElapsed)

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [petalCount])

  return (
    <>
      <canvas ref={treesCanvasRef} className="sakura-trees-canvas" />
      <canvas ref={canvasRef} className="sakura-canvas" />
      <div className="samurai-overlay" />
    </>
  )
}

export default SakuraFall
