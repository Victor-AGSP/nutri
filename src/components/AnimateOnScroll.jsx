import { useRef, useEffect, useState } from 'react'

export default function AnimateOnScroll({ children, className = '', threshold = 0.15, rootMargin = '0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={`animate-on-scroll ${visible ? 'in' : 'out'} ${className}`.trim()}>
      {children}
    </div>
  )
}
