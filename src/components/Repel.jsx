import { useEffect, useRef } from 'react'

// Repel: gently moves its element away from the cursor when cursor is within `radius`.
// Improvements: smaller default strength, continuous RAF loop with lerp interpolation,
// clamping of offset and automatic no-op on touch devices.
export default function Repel({ children, radius = 140, strength = 0.12, className = '' }) {
  const ref = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    // disable effect on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return

    const el = ref.current
    if (!el) return

    el.style.willChange = 'transform'

    function onMove(e) {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
      ensureLoop()
    }

    function onLeave() {
      mouseRef.current.active = false
      targetRef.current.x = 0
      targetRef.current.y = 0
      ensureLoop()
    }

    function computeTarget() {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = mouseRef.current.x - cx
      const dy = mouseRef.current.y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (mouseRef.current.active && dist < radius && dist > 0.1) {
        const pct = 1 - dist / radius
        const dirX = -dx / dist
        const dirY = -dy / dist
        const maxOffset = Math.min(radius * 0.35, 120)
        const tx = dirX * strength * pct * maxOffset
        const ty = dirY * strength * pct * maxOffset
        targetRef.current.x = tx
        targetRef.current.y = ty
      } else {
        targetRef.current.x = 0
        targetRef.current.y = 0
      }
    }

    function loop() {
      computeTarget()
      const cur = currentRef.current
      const tgt = targetRef.current
      // lerp factor controls smoothness (smaller = smoother/slower)
      const lerp = 0.12
      const dx = tgt.x - cur.x
      const dy = tgt.y - cur.y
      cur.x += dx * lerp
      cur.y += dy * lerp
      // apply
      el.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`

      // stop loop when movement is negligible and target is zero
      if (Math.abs(dx) + Math.abs(dy) > 0.01) {
        rafRef.current = requestAnimationFrame(loop)
      } else {
        rafRef.current = null
      }
    }

    function ensureLoop() {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [radius, strength])

  return (
    <div ref={ref} className={`repel ${className}`}>
      {children}
    </div>
  )
}
