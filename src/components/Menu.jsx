import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './Menu.css'

export default function Menu() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef(null)
  const navRef = useRef(null)

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') setOpen(false) }
    if(open){
      document.addEventListener('keydown', onKey)
      // prevent body scroll when menu open
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      // focus first link slightly after render
      const t = setTimeout(()=>{
        if(firstLinkRef.current) firstLinkRef.current.focus()
      }, 60)
      return ()=>{
        clearTimeout(t)
        document.removeEventListener('keydown', onKey)
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Nutri<span className="dot">.</span></div>

        <button
          className="menu-toggle"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={()=>setOpen(v=>!v)}
        >
          <span className={`hamburger ${open ? 'is-open' : ''}`} />
        </button>

        <nav id="main-nav" ref={navRef} className={`nav ${open ? 'open' : ''}`} aria-hidden={!open}>
          <Link ref={firstLinkRef} onClick={()=>setOpen(false)} className={pathname === '/' ? 'active' : ''} to="/">Inicio</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/services' ? 'active' : ''} to="/services">Servicios</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/about' ? 'active' : ''} to="/about">Nosotros</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/contact' ? 'active' : ''} to="/contact">Contacto</Link>
        </nav>

        {open && <div className="nav-backdrop" onClick={()=>setOpen(false)} aria-hidden="true" />}
      </div>
    </header>
  )
}
