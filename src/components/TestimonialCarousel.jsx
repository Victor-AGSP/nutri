import { useEffect, useState } from 'react'
import './TestimonialCarousel.css'

export default function TestimonialCarousel({ items = [] , interval = 4500}){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    if(!items || items.length <= 1) return
    const t = setInterval(()=> setIndex(i => (i+1) % items.length), interval)
    return ()=> clearInterval(t)
  },[items,interval])

  if(!items || items.length === 0) return null
  return (
    <div className="testi-carousel">
      <div className="testi-track" style={{transform:`translateX(${-index * 100}%)`}}>
        {items.map((it, i) => (
          <figure className="testi-item" key={i}>
            <blockquote>“{it.text}”</blockquote>
            <figcaption>{it.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="testi-dots">
        {items.map((_, i) => (
          <button key={i} className={`dot ${i===index? 'active':''}`} onClick={()=>setIndex(i)} aria-label={`Mostrar testimonio ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
