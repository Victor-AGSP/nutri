import './Services.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'
import Icon from './Icon'
import svcEval from '../assets/service-eval.svg'
import svcMealplan from '../assets/service-mealplan.svg'
import svcWeight from '../assets/service-weight.svg'
import svcSports from '../assets/service-sports.svg'
import svcKids from '../assets/service-kids.svg'
import svcWorkshops from '../assets/service-workshops.svg'
import svcPrenatal from '../assets/service-prenatal.svg'
import svcGeriatrics from '../assets/service-geriatrics.svg'
import svcOnline from '../assets/service-online.svg'

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
  const heading = 'Nuestros Servicios'
  function renderAnimated(text, step = 40){
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
  return (
    <div className="services-page container">
      <AnimateOnScroll>
        <header className="services-header">
          <h1 className="animated-heading" aria-label={heading}>
            {renderAnimated(heading, 40)}
          </h1>
          <p className="lead">Soluciones prácticas y personalizadas para mejorar tus hábitos alimenticios y alcanzar tus objetivos.</p>
        </header>
      </AnimateOnScroll>

      <section className="services-grid">
        {/* map service id to imported images so bundler serves them reliably */}
        {/**/}
        {servicesList.map((s, i) => {
          const mapIcon = {
            eval: 'calendar',        // evaluación / cita
            mealplan: 'salad',       // planes / comida
            weight: 'progress',      // control de peso / progreso
            sports: 'barbell',       // nutrición deportiva
            kids: 'family',          // nutrición pediátrica (familia)
            workshops: 'recipe',     // talleres y cocina
            prenatal: 'heart',       // asesoría prenatal (cuidado)
            geriatrics: 'leaf',      // nutrición geriátrica (bienestar)
            online: 'chat'           // coaching online
          }
          const iconName = mapIcon[s.id] || 'plan'
          const serviceImgs = {
            eval: svcEval,
            mealplan: svcMealplan,
            weight: svcWeight,
            sports: svcSports,
            kids: svcKids,
            workshops: svcWorkshops,
            prenatal: svcPrenatal,
            geriatrics: svcGeriatrics,
            online: svcOnline
          }

          return (
            <AnimateOnScroll key={s.id} className="service-card card-hover" style={{transitionDelay:`${i*80}ms`}}>
              <div className="service-media">
                <img src={serviceImgs[s.id]} alt={s.title} loading="lazy" />
              </div>
              <div className="service-top">
                <div className="service-icon" aria-hidden><Icon name={iconName} title={s.title} /></div>
                <h3>{s.title}</h3>
                <div className="price">{s.price}</div>
              </div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-actions">
                <button className="btn-primary interactive">Más info</button>
                <button className="btn-ghost interactive">Reservar</button>
              </div>
            </AnimateOnScroll>
          )
        })}
      </section>
    </div>
  )
}
