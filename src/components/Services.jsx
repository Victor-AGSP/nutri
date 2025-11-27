import './Services.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

const servicesList = [
  {
    id: 'eval',
    title: 'Evaluación Nutricional',
    desc: 'Análisis completo de hábitos, composición corporal y objetivos para diseñar tu plan inicial.',
    price: 'Consulta inicial'
  },
  {
    id: 'mealplan',
    title: 'Planes Personalizados',
    desc: 'Planes de comidas semanales adaptados a tus gustos, alergias y ritmo de vida.',
    price: 'Desde $29'
  },
  {
    id: 'weight',
    title: 'Control de Peso',
    desc: 'Programa para pérdida o ganancia de peso con seguimiento y ajustes periódicos.',
    price: 'Por paquete'
  },
  {
    id: 'sports',
    title: 'Nutrición Deportiva',
    desc: 'Estrategias nutricionales para rendimiento, recuperación y composición corporal.',
    price: 'Planes deportivos'
  },
  {
    id: 'kids',
    title: 'Nutrición Pediátrica',
    desc: 'Asesoría para alimentación infantil, crecimiento y hábitos saludables en familia.',
    price: 'Por consulta'
  },
  {
    id: 'workshops',
    title: 'Talleres y Cocina Saludable',
    desc: 'Sesiones prácticas para aprender recetas sencillas, nutritivas y económicas.',
    price: 'Talleres grupales'
  }
  ,
  {
    id: 'prenatal',
    title: 'Asesoría Prenatal',
    desc: 'Planes y recomendaciones nutricionales para embarazo y lactancia, con seguimiento especializado.',
    price: 'Consulta prenatal'
  },
  {
    id: 'geriatrics',
    title: 'Nutrición Geriátrica',
    desc: 'Soporte nutricional para adultos mayores, enfocado en movilidad, masa muscular y bienestar general.',
    price: 'Planes para mayores'
  },
  {
    id: 'online',
    title: 'Coaching Online',
    desc: 'Sesiones virtuales, seguimiento por app y ajustes semanales. Ideal si tienes poco tiempo.',
    price: 'Suscripción mensual'
  }
]

export default function Services(){
  return (
    <div className="services-page container">
      <AnimateOnScroll>
        <header className="services-header">
          <h1>Nuestros Servicios</h1>
          <p className="lead">Soluciones prácticas y personalizadas para mejorar tus hábitos alimenticios y alcanzar tus objetivos.</p>
        </header>
      </AnimateOnScroll>

      <section className="services-grid">
        {servicesList.map((s, i) => (
          <AnimateOnScroll key={s.id} className="service-card card-hover" style={{transitionDelay:`${i*80}ms`}}>
            <div className="service-media">
              <img src={`/images/service-${s.id}.svg`} alt={s.title} loading="lazy" />
            </div>
            <div className="service-top">
              <div className="service-icon" aria-hidden>🍎</div>
              <h3>{s.title}</h3>
              <div className="price">{s.price}</div>
            </div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-actions">
              <button className="btn-primary interactive">Más info</button>
              <button className="btn-ghost interactive">Reservar</button>
            </div>
          </AnimateOnScroll>
        ))}
      </section>
    </div>
  )
}
