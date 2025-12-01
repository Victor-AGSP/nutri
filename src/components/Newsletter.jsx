import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  function submit(e){
    e.preventDefault()
    setError('')
    if(!email){ setError('Ingresa un email válido'); return }
    // simple email pattern
    const re = /^\S+@\S+\.\S+$/
    if(!re.test(email)){ setError('Formato de correo inválido'); return }
    setDone(true)
    setTimeout(()=> setEmail(''), 800)
  }
  return (
    <section className="newsletter container" aria-labelledby="newsletter-heading">
      <div className="newsletter-inner">
        <div className="newsletter-copy">
          <h3 id="newsletter-heading">Suscríbete a consejos semanales</h3>
          <p className="muted">Recibe recetas, tips y novedades directamente en tu correo.</p>
        </div>

        <div className="newsletter-action">
          {!done ? (
            <form className="newsletter-form" onSubmit={submit} noValidate>
              <label className="visually-hidden" htmlFor="newsletter-email">Correo electrónico</label>
              <div className="input-group">
                <input id="newsletter-email" aria-live="polite" aria-label="Email" type="email" placeholder="tu@correo.com" value={email} onChange={e=>{setEmail(e.target.value); setError('')}} />
                <button className="btn-primary" type="submit">Suscribirme</button>
              </div>
              <div className="field-error" role="status" aria-live="polite">{error}</div>
            </form>
          ) : (
            <div className="newsletter-done" role="status" aria-live="polite">
              <div className="done-msg">¡Gracias! Ya recibirás nuestras novedades.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
