import { useState } from 'react'
import './Contact.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact(){
  const [sent, setSent] = useState(false)
  function renderAnimated(text, step = 30){
    let idx = 0
    return text.split(' ').map((word, wi) => (
      <span key={wi} className="word">
        {word.split('').map((ch) => {
          const i = idx++
          return <span key={i} className="char" style={{ animationDelay: `${i * step}ms` }}>{ch}</span>
        })}
      </span>
    ))
  }
  function handleSubmit(e){
    e.preventDefault()
    // mock send
    setSent(true)
    setTimeout(()=> setSent(false), 4500)
  }

  return (
    <section className="contact container">
      <div className="contact-grid">
        <AnimateOnScroll className="contact-info fade-left">
          <div className="info-card">
            <div className="eyebrow">Contacto</div>
            {
              (() => {
                const heading = 'Hablemos de tu alimentación'
                return (
                  <h2 className="animated-heading" aria-label={heading}>
                    {renderAnimated(heading, 30)}
                  </h2>
                )
              })()
            }
            <p className="lead">Cuéntanos tus objetivos y te ayudaremos con un plan práctico, personalizado y fácil de seguir.</p>

            <ul className="contact-list">
              <li><strong>Email:</strong> contacto@nutri.example</li>
              <li><strong>Teléfono:</strong> +34 600 123 456</li>
              <li><strong>Horario:</strong> Lun-Vie 9:00 — 18:00</li>
            </ul>

            <div className="mini-cta">
              <a className="btn-ghost" href="/services">Ver servicios</a>
              <a className="btn-primary" href="/contact">Reservar consulta</a>
            </div>
          </div>
          <div className="decorative">
            <img src="/images/service-mealplan.svg" alt="decor" loading="lazy" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="contact-form fade-right">
          <form onSubmit={handleSubmit} className="form-card">
            <div className="form-row">
              <label className="input-group">
                <input required name="name" type="text" />
                <span className="label">Nombre</span>
              </label>
              <label className="input-group">
                <input required name="email" type="email" />
                <span className="label">Correo electrónico</span>
              </label>
            </div>

            <label className="input-group">
              <textarea required name="message" rows="6"></textarea>
              <span className="label">Mensaje</span>
            </label>

            <div className="form-actions">
              <button className="btn-primary btn-send" type="submit">{sent ? 'Enviado ✓' : 'Enviar mensaje'}</button>
              <div className={`success ${sent ? 'visible' : ''}`}>Gracias — recibimos tu mensaje</div>
            </div>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
