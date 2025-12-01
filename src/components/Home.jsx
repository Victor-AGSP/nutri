import { Link } from 'react-router-dom'
import './Home.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'
import Repel from './Repel'
import mealplan from '../assets/service-mealplan.svg'
import apple from '../assets/food-apple.svg'
import broccoli from '../assets/food-broccoli.svg'
import carrot from '../assets/food-carrot.svg'
import TestimonialCarousel from './TestimonialCarousel'
import FAQ from './FAQ'
import Newsletter from './Newsletter'
import Icon from './Icon'

export default function Home(){
  const heading = 'Alimenta tu vida: planes prácticos para sentirte mejor'
  function renderAnimated(text, step = 40){
    let idx = 0
    return text.split(' ').map((word, wi) => (
      <span key={wi} className="word">
        {word.split('').map((ch) => {
          const i = idx++
          return (
            <span key={i} className="char" style={{ animationDelay: `${i * step}ms` }}>
              {ch}
            </span>
          )
        })}
      </span>
    ))
  }
  const features = [
    {icon:'plan', title:'Planes personalizados', text:'Menús que se adaptan a tus horarios y preferencias.'},
    {icon:'recipe', title:'Recetas saludables', text:'Recetas fáciles, rápidas y balanceadas para el día a día.'},
    {icon:'progress', title:'Seguimiento de progreso', text:'Reportes y ajustes semanales para mantener resultados.'}
  ]

  const tips = [
    {icon:'salad', title:'Proteínas magras', text:'Incluye pollo, pescado o legumbres para mantener saciedad y tono muscular.'},
    {icon:'rainbow', title:'Plato colorido', text:'Varía verduras de distintos colores para obtener más vitaminas y fibra.'},
    {icon:'water', title:'Hidratación', text:'Bebe agua a lo largo del día; reemplaza bebidas azucaradas por agua o infusiones.'},
    {icon:'clock', title:'Rutina de comidas', text:'Mantén horarios regulares para estabilizar el apetito y energía.'},
    {icon:'mindful', title:'Comer consciente', text:'Come despacio, disfruta cada bocado y detente cuando estés satisfecho.'}
  ]

  const testimonials = [
    {name:'María', text:'Me ayudaron a estructurar comidas reales y sostenibles.'},
    {name:'Carlos', text:'Resultados reales con un plan sencillo de seguir.'},
    {name:'Lucía', text:'Las recetas son fáciles y mi familia las adoptó sin problema.'},
    {name:'Javier', text:'Perdí 6kg en tres meses con seguimiento semanal.'},
    {name:'Sofía', text:'Aprendí a comer variado sin pasar hambre.'},
    {name:'Andrés', text:'El plan se adaptó a mis turnos nocturnos y funcionó perfecto.'}
  ]

  return (
    <div className="home-hero">
      <div className="container hero-grid">
        <AnimateOnScroll className="hero-text">
          <div className="eyebrow">Nutrición · Salud · Bienestar</div>
          <h1 className="animated-heading" aria-label={heading}>
            {renderAnimated(heading, 40)}
          </h1>
          <p className="lead">Recetas reales, planes adaptados a tus necesidades y acompañamiento para cambios sostenibles.</p>

          <div className="hero-cta">
            <Link to="/contact"><button className="btn-primary interactive">Comenzar</button></Link>
            <Link to="/services"><button className="btn-ghost">Ver servicios</button></Link>
          </div>

          <div className="hero-stats">
            <div className="stat"><div className="num">1.2k+</div><div className="label">Clientes</div></div>
            <div className="stat"><div className="num">500+</div><div className="label">Recetas</div></div>
            <div className="stat"><div className="num">10+</div><div className="label">Años</div></div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="hero-media fade-right">
          <div className="hero-illustration">
            <img src={mealplan} alt="Ilustración nutrición" loading="lazy" />
            <Repel className="decor decor-1" radius={180} strength={0.5}>
              <img src={apple} alt="manzana" loading="lazy" />
            </Repel>
            <Repel className="decor decor-2" radius={160} strength={0.4}>
              <img src={broccoli} alt="brocoli" loading="lazy" />
            </Repel>
            <Repel className="decor decor-3" radius={140} strength={0.45}>
              <img src={carrot} alt="zanahoria" loading="lazy" />
            </Repel>
          </div>
        </AnimateOnScroll>
      </div>

      <section className="container features-section">
        <AnimateOnScroll>
          <h2>Qué ofrecemos</h2>
        </AnimateOnScroll>

        <div className="features-grid">
          {features.map((f,i) => (
            <AnimateOnScroll key={f.title} className="feature card-hover" style={{transitionDelay:`${i*80}ms`}}>
              <div className="feature-top"><div className="icon"><Icon name={f.icon} title={f.title} /></div><h3>{f.title}</h3></div>
              <p>{f.text}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="container tips-section">
        <AnimateOnScroll>
          <h2>Consejos rápidos</h2>
        </AnimateOnScroll>
        <div className="tips-grid">
          {tips.map((t,i)=> (
            <AnimateOnScroll key={t.title} className="tip card-hover" style={{transitionDelay:`${i*60}ms`}}>
              <div className="tip-icon" aria-hidden><Icon name={t.icon} title={t.title} /></div>
              <div className="tip-body">
                <h4 className="tip-title">{t.title}</h4>
                <p className="tip-text">{t.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="container testimonials-section">
        <AnimateOnScroll>
          <h2>Testimonios</h2>
        </AnimateOnScroll>
        <TestimonialCarousel items={testimonials} visible={2} interval={6000} />
      </section>

      <FAQ items={[
        {q:'¿Cómo empiezo?', a:'Puedes agendar una consulta desde la página de contacto y recibiremos tu historial.'},
        {q:'¿Tienen planes para deportistas?', a:'Sí, contamos con planes deportivos adaptados a tus entrenamientos.'},
        {q:'¿Ofrecen seguimiento online?', a:'Sí, ofrecemos coaching online y ajustes por suscripción.'}
      ]} />

      <Newsletter />

      <section className="container cta-section">
        <AnimateOnScroll className="cta-card fade-left">
          <h2>Listo para transformar tu alimentación?</h2>
          <p className="lead">Reserva una consulta inicial y recibe un plan personalizado.</p>
          <div><Link to="/contact"><button className="btn-primary">Reservar ahora</button></Link></div>
        </AnimateOnScroll>
      </section>
    </div>
  )
}
