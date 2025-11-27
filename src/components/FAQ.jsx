import { useState } from 'react'
import './FAQ.css'

export default function FAQ({ items = [] }){
  return (
    <section className="faq-section container">
      <h2>Preguntas frecuentes</h2>
      <div className="faq-list">
        {items.map((it, i) => <FAQItem key={i} q={it.q} a={it.a} />)}
      </div>
    </section>
  )
}

function FAQItem({ q, a }){
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open? 'open': ''}`}>
      <button className="faq-q" onClick={()=>setOpen(o=>!o)} aria-expanded={open}>{q}
        <span className="chev">{open? '−':'+'}</span>
      </button>
      <div className="faq-a" aria-hidden={!open}>{a}</div>
    </div>
  )
}
