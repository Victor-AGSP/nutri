import './About.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function About(){
  const heading = 'Transformando la relación con la comida'
  const pillars = [
    {icon:'🎯', title:'Misión', text:'Ayudar a las personas a crear hábitos alimentarios sostenibles y realistas.'},
    {icon:'🔭', title:'Visión', text:'Ser referentes en nutrición práctica y acompañamiento a largo plazo.'},
    {icon:'🤝', title:'Valores', text:'Empatía, evidencia científica y soluciones personalizadas.'}
  ]

  const team = [
    {name:'María López', role:'Nutricionista jefe', bio:'Especialista en nutrición clínica y planes personalizados.'},
    {name:'Carlos Ruiz', role:'Coach de hábitos', bio:'Entrenador en cambio de comportamiento y adherencia.'},
    {name:'Ana Gómez', role:'Chef nutricional', bio:'Desarrolla recetas sabrosas y balanceadas para clientes.'}
  ]

  const timeline = [
    {year:'2018', text:'Fundación del proyecto con un pequeño grupo de pacientes.'},
    {year:'2020', text:'Lanzamiento de planes digitales y expansión a coaching online.'},
    {year:'2023', text:'Más de 1.000 clientes atendidos y nuevas herramientas de seguimiento.'}
  ]

  const stats = [
    {num:'1.2k+', label:'Clientes felices'},
    {num:'500+', label:'Recetas'},
    {num:'10+', label:'Años experiencia'}
  ]

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
    <section className="about container">
      <AnimateOnScroll className="about-hero">
        <div className="eyebrow">Quiénes somos</div>
        <h1 className="animated-heading" aria-label={heading}>
          {renderAnimated(heading, 40)}
        </h1>
        <p className="lead">Un equipo multidisciplinario que combina evidencia científica, recetas prácticas y acompañamiento humano para resultados sostenibles.</p>
      </AnimateOnScroll>

      <div className="about-pillers">
        {pillars.map((p,i)=> (
          <AnimateOnScroll key={p.title} className="pillar card-hover" style={{transitionDelay:`${i*80}ms`}}>
            <div className="pill-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </AnimateOnScroll>
        ))}
      </div>

      <section className="about-team">
        <AnimateOnScroll>
          <h2>Nuestro equipo</h2>
        </AnimateOnScroll>

        <div className="team-grid">
          {team.map((m,i)=> (
            <AnimateOnScroll key={m.name} className="team-card" style={{transitionDelay:`${i*80}ms`}}>
              <div className="avatar">{m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
              <p className="bio">{m.bio}</p>
              <div className="socials">
                <a aria-label={`twitter-${m.name}`} href="#">Twitter</a>
                <a aria-label={`linkedin-${m.name}`} href="#">LinkedIn</a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-grid">
          {stats.map(s=> (
            <div key={s.label} className="stat card-hover">
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-timeline">
        <AnimateOnScroll>
          <h2>Nuestra historia</h2>
        </AnimateOnScroll>
        <div className="timeline">
          {timeline.map((t,i)=> (
            <div key={t.year} className="timeline-item">
              <div className="marker" />
              <div className="year">{t.year}</div>
              <div className="text">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <AnimateOnScroll className="cta-card fade-up">
          <h2>Listos para acompañarte</h2>
          <p>Agenda una consulta y descubre el plan que mejor se adapte a tu vida.</p>
          <div className="cta-actions">
            <a className="btn-primary" href="/contact">Contactar</a>
            <a className="btn-ghost" href="/services">Ver servicios</a>
          </div>
        </AnimateOnScroll>
      </section>
    </section>
  )
}
