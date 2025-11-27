import './Footer.css'
import './animations.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function Footer(){
  return (
    <AnimateOnScroll>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Nutri. Todos los derechos reservados.</div>
          <div className="footer-links">Hecho con ❤️ · <a href="#">Política</a></div>
        </div>
      </footer>
    </AnimateOnScroll>
  )
}
