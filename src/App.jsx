import './App.css'
import './components/Menu.css'
import './components/Footer.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { Suspense, lazy } from 'react'
import WaButton from './components/WaButton'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./components/Home'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Menu />
      <main className="app-main">
        <Suspense fallback={<div style={{padding:48,textAlign:'center'}}>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WaButton />
    </div>
  )
}

export default App
