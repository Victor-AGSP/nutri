import { Link } from 'react-router-dom'
import './Home.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'
import Repel from './Repel'
import TestimonialCarousel from './TestimonialCarousel'
import FAQ from './FAQ'
import Newsletter from './Newsletter'

export default function Home(){
  const features = [
    {icon:'🥗', title:'Planes personalizados', text:'Menús que se adaptan a tus horarios y preferencias.'},
    {icon:'📦', title:'Recetas saludables', text:'Recetas fáciles, rápidas y balanceadas para el día a día.'},
    {icon:'📊', title:'Seguimiento de progreso', text:'Reportes y ajustes semanales para mantener resultados.'}
  ]

  const tips = [
    'Prioriza proteínas magras en cada comida',
    'Incluye vegetales de varios colores',
    'Mantente hidratado — agua primero',
  ]

  const testimonials = [
    {name:'María', text:'Me ayudaron a estructurar comidas reales y sostenibles.'},
    {name:'Carlos', text:'Resultados reales con un plan sencillo de seguir.'}
  ]

  return (
    <div className="home-hero">
      <div className="container hero-grid">
        <AnimateOnScroll className="hero-text">
          <div className="eyebrow">Nutrición · Salud · Bienestar</div>
          <h1>Alimenta tu vida: planes prácticos para sentirte mejor</h1>
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
            <img src="/images/service-mealplan.svg" alt="Ilustración nutrición" loading="lazy" />
            <Repel className="decor decor-1" radius={180} strength={0.5}>
              <img src="/images/food-apple.svg" alt="apple" loading="lazy" />
            </Repel>
            <Repel className="decor decor-2" radius={160} strength={0.4}>
              <img src="/images/food-broccoli.svg" alt="broccoli" loading="lazy" />
            </Repel>
            <Repel className="decor decor-3" radius={140} strength={0.45}>
              <img src="/images/food-carrot.svg" alt="carrot" loading="lazy" />
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
              <div className="feature-top"><div className="icon">{f.icon}</div><h3>{f.title}</h3></div>
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
            <AnimateOnScroll key={t} className="tip" style={{transitionDelay:`${i*60}ms`}}>
              {t}
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="container testimonials-section">
        <AnimateOnScroll>
          <h2>Testimonios</h2>
        </AnimateOnScroll>
        <TestimonialCarousel items={testimonials} />
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
