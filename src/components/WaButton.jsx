import { useEffect, useRef, useState } from 'react'
import './WaButton.css'

export default function WaButton(){
  const phone = '56953488291'
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const containerRef = useRef(null)

  // close when clicking outside on small screens
  useEffect(()=>{
    function onDoc(e){
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return ()=> document.removeEventListener('click', onDoc)
  },[])

  function handleSubmit(e){
    e && e.preventDefault()
    const text = msg.trim()
    const url = text ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : `https://wa.me/${phone}`
    window.open(url, '_blank', 'noopener')
    setMsg('')
    setOpen(false)
  }

  // detect touch devices to prefer click toggle
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  return (
    <div ref={containerRef} className={`wa-container ${open ? 'open' : ''}`} onMouseEnter={()=>!isTouch && setOpen(true)} onMouseLeave={()=>!isTouch && setOpen(false)}>
      <form className="wa-panel" onSubmit={handleSubmit} role="search">
        <input
          className="wa-input"
          placeholder="Escribe tu mensaje..."
          value={msg}
          onChange={e=>setMsg(e.target.value)}
          aria-label="Mensaje para WhatsApp"
        />
        <button type="submit" className="wa-send" aria-label="Enviar mensaje WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="#fff" />
          </svg>
        </button>
      </form>

      <button className="wa-fab" onClick={()=> setOpen(v=>!v)} aria-label="Abrir WhatsApp">
        <span className="wa-ring" aria-hidden="true" />
        <span className="wa-pulse" aria-hidden="true" />
        <span className="wa-inner" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M20.5 3.5A11.9 11.9 0 0 0 12 1C6.48 1 2 5.48 2 11c0 1.94.52 3.74 1.43 5.33L2 23l6.95-1.8A11.9 11.9 0 0 0 12 23c5.52 0 10-4.48 10-10 0-2.66-1.04-5.09-2.73-6.9zM12 21.5c-.7 0-1.38-.08-2.03-.24L8 20l-.56-1.17A9.5 9.5 0 0 1 4.5 11C4.5 6.86 8.36 3 12 3c2.48 0 4.75 1.01 6.36 2.62A8.93 8.93 0 0 1 20.5 11c0 4.97-4.53 9.5-8.5 9.5z"/>
            <path fill="#fff" d="M17.5 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3-.1-.1-.7-1.6-.9-2.2-.2-.6-.4-.5-.6-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3 1.1.5 1.9.8 2.6 1 .9.2 1.6.2 2.2.1.7-.1 1.7-.7 1.9-1.7.2-1 .2-1.8.1-2c-.1-.2-.4-.3-.8-.4z"/>
          </svg>
        </span>
      </button>
    </div>
  )
}
