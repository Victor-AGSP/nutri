import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  function submit(e){
    e.preventDefault()
    if(!email) return
    setDone(true)
    setTimeout(()=> setEmail(''), 800)
  }
  return (
    <section className="newsletter container">
      <div className="newsletter-inner">
        <div>
          <h3>Suscríbete a consejos semanales</h3>
          <p className="muted">Recibe recetas, tips y novedades directamente en tu correo.</p>
        </div>
        <form className="newsletter-form" onSubmit={submit}>
          <input type="email" placeholder="tu@correo.com" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email" />
          <button className="btn-primary" type="submit">{done? '¡Gracias!':'Suscribirme'}</button>
        </form>
      </div>
    </section>
  )
}
