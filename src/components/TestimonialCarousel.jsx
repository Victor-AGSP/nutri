import { useEffect, useState, useRef } from 'react'
import './TestimonialCarousel.css'
import { motion, AnimatePresence } from 'framer-motion'

function Column({ items = [], interval = 5000 }){
  const [index, setIndex] = useState(0)
  const [prev, setPrev] = useState(null)
  const [animating, setAnimating] = useState(false)
  const [playEnter, setPlayEnter] = useState(false)
  const timer = useRef(null)
  const enterTimer = useRef(null)
  const endTimer = useRef(null)
  const indexRef = useRef(0)
  const colRef = useRef(null)
  const durationRef = useRef(1200) // will read from CSS --testi-dur when mounted
  const STAGGER = 380 // slightly larger stagger to separate exit/enter and reduce overlap

  useEffect(()=>{
    indexRef.current = index
  },[index])

  useEffect(()=>{
    // read CSS duration variable from the component root to keep JS in sync with CSS
    if(colRef.current){
      try{
        const s = getComputedStyle(colRef.current)
        const d = s.getPropertyValue('--testi-dur')?.trim()
        if(d){
          if(d.endsWith('ms')) durationRef.current = parseFloat(d)
          else if(d.endsWith('s')) durationRef.current = parseFloat(d) * 1000
        }
      }catch(e){}
    }

    if(!items || items.length <= 1) return
    // use ref inside interval to avoid stale closures
    timer.current = setInterval(()=>{
      const current = indexRef.current
      const next = (current + 1) % items.length
      // trigger animation sequence
      // clear any pending timers to avoid overlaps
      clearTimeout(enterTimer.current)
      clearTimeout(endTimer.current)
      setPrev(current)
      setAnimating(true)
      setPlayEnter(false)
      enterTimer.current = setTimeout(()=>{
        // schedule state update on next frame for smoother paint
        requestAnimationFrame(()=>{
          setIndex(next)
          indexRef.current = next
          // ensure class toggles happen on next frame
          requestAnimationFrame(()=> setPlayEnter(true))
        })
      }, STAGGER)
      endTimer.current = setTimeout(()=>{
        setAnimating(false)
        setPrev(null)
        setPlayEnter(false)
      }, durationRef.current + 120)
    }, interval)
    return ()=>{
      clearInterval(timer.current)
      clearTimeout(enterTimer.current)
      clearTimeout(endTimer.current)
    }
  },[items, interval, STAGGER])

  function handleNext(){
    if(animating) return
    const current = indexRef.current
    const next = (current + 1) % items.length
    // clear pending timers to avoid overlapping sequences
    clearTimeout(enterTimer.current)
    clearTimeout(endTimer.current)
    setPrev(current)
    setAnimating(true)
    setPlayEnter(false)
    enterTimer.current = setTimeout(()=>{
      requestAnimationFrame(()=>{
        setIndex(next)
        indexRef.current = next
        requestAnimationFrame(()=> setPlayEnter(true))
      })
    }, STAGGER)
    endTimer.current = setTimeout(()=>{
      setAnimating(false)
      setPrev(null)
      setPlayEnter(false)
    }, durationRef.current + 120)
  }

  const variants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.36, ease: 'easeIn' } }
  }

  return (
    <div ref={colRef} className={`testi-col ${animating ? 'anim' : ''}`}>
      <AnimatePresence initial={false} mode="wait">
        {prev !== null && (
          <motion.article className="card exit" key={"p"+prev} aria-hidden initial="initial" animate="enter" exit="exit" variants={variants}>
            <div className="who"><div className="avatar">{(items[prev].name||'').split(' ').map(n=>n[0]).slice(0,2).join('')}</div><div className="meta"><div className="name">{items[prev].name}</div><div className="role">{items[prev].role||''}</div></div></div>
            <blockquote>“{items[prev].text}”</blockquote>
          </motion.article>
        )}

        <motion.article className={`card enter ${playEnter ? 'playing' : ''}`} key={"c"+index} aria-live="polite" initial="initial" animate="enter" exit="exit" variants={variants}>
          <div className="who"><div className="avatar">{(items[index].name||'').split(' ').map(n=>n[0]).slice(0,2).join('')}</div><div className="meta"><div className="name">{items[index].name}</div><div className="role">{items[index].role||''}</div></div></div>
          <blockquote>“{items[index].text}”</blockquote>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

export default function TestimonialCarousel({ items = [], interval = 5000 }){
  if(!items || items.length === 0) return null

  const left = items.filter((_,i)=> i % 2 === 0)
  const right = items.filter((_,i)=> i % 2 === 1)

  while(left.length < right.length) left.push(...left.slice(0,1))
  while(right.length < left.length) right.push(...right.slice(0,1))

  return (
    <div className="testi-carousel two-cols">
      <div className="cols">
        <Column items={left} interval={interval} />
        <Column items={right.length? right : left} interval={interval} />
      </div>
    </div>
  )
}
