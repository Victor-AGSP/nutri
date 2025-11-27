import './Contact.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact(){
  return (
    <section className="contact container">
      <AnimateOnScroll>
        <h2>Contacto</h2>
      </AnimateOnScroll>

      <AnimateOnScroll className="contact-form">
        <form onSubmit={e=>e.preventDefault()}>
          <label>Nombre<input type="text" name="name"/></label>
          <label>Email<input type="email" name="email"/></label>
          <label>Mensaje<textarea name="message" rows="6"></textarea></label>
          <div className="form-actions">
            <button className="btn-primary">Enviar</button>
          </div>
        </form>
      </AnimateOnScroll>
    </section>
  )
}
