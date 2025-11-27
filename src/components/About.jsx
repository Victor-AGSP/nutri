import './About.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function About(){
  const cards = ['Misión','Visión','Valores']
  return (
    <section className="about container">
      <AnimateOnScroll>
        <h2>Sobre nosotros</h2>
        <p>Breve descripción de la organización o proyecto. Rellena este texto con tu contenido.</p>
      </AnimateOnScroll>

      <div className="about-grid">
        {cards.map((c, i) => (
          <AnimateOnScroll key={c} className="card" style={{transitionDelay:`${i*80}ms`}}>
            {c}
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
