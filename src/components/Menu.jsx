import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Menu.css'

export default function Menu() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Nutri<span className="dot">.</span></div>

        <nav className={`nav ${open ? 'open' : ''}`} aria-expanded={open}>
          <Link onClick={()=>setOpen(false)} className={pathname === '/' ? 'active' : ''} to="/">Inicio</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/services' ? 'active' : ''} to="/services">Servicios</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/about' ? 'active' : ''} to="/about">Nosotros</Link>
          <Link onClick={()=>setOpen(false)} className={pathname === '/contact' ? 'active' : ''} to="/contact">Contacto</Link>
        </nav>

        <button className="menu-toggle" aria-label="Abrir menú" onClick={()=>setOpen(v=>!v)}>
          <span className={`hamburger ${open ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
