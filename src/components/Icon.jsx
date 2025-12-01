import React from 'react'

function Salad({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M3 13c1.5 4 6 6 9 6s7.5-2 9-6c-3-1-6-2-9-2s-6 1-9 2z" />
      <path d="M8 10c1-2 3-3 4-3s3 1 4 3" />
      <path d="M10 7c0 1 1 2 2 2" />
    </svg>
  )
}

function Rainbow({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M21 16a9 9 0 0 0-18 0" />
      <path d="M18 16a6 6 0 0 0-12 0" />
      <path d="M15 16a3 3 0 0 0-6 0" />
    </svg>
  )
}

function Water({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 2s6 5 6 9a6 6 0 0 1-12 0c0-4 6-9 6-9z" />
    </svg>
  )
}

function Clock({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  )
}

function Mindful({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M7 21c1-3 5-5 5-5s4 2 5 5" />
      <path d="M7 3c1.5 1 2 3 2 4" />
      <path d="M17 3c-1.5 1-2 3-2 4" />
    </svg>
  )
}

function Plan({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 9h8M8 13h8" />
    </svg>
  )
}

function Recipe({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M4 7h16M6 7v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7" />
      <path d="M8 10h8" />
    </svg>
  )
}

function Progress({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M3 3v18h18" />
      <path d="M7 14v-4M12 17v-10M17 10v-3" />
    </svg>
  )
}

function Heart({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 21s-7-4.4-9-7.2C-1.1 9.1 6.3 3 12 8c5.7-5 13.1 1.1 9 5.8C19 16.6 12 21 12 21z" />
    </svg>
  )
}

/* Additional minimal icons */
function Apple({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M17 11c0 3-2.5 6-5 6s-5-3-5-6a5 5 0 1 1 10 0z" />
      <path d="M13.5 4.5c.7-.7 1.8-.7 2.5 0" />
    </svg>
  )
}

function Broccoli({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M6 14c-1-3 2-6 5-6s6 3 5 6" />
      <rect x="10" y="14" width="4" height="6" rx="1" fill="currentColor" />
    </svg>
  )
}

function CarrotIcon({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M4 20l8-8 4 4-8 8-4-4z" />
      <path d="M14 6c1 1 2 1 3 0" />
    </svg>
  )
}

function Leaf({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M20 4s-6 4-12 10c-4 4-4 8-4 8s4 0 8-4c6-6 10-12 8-14z" />
      <path d="M7 17c2-2 6-6 11-9" />
    </svg>
  )
}

function Barbell({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M5 12h14" />
      <rect x="3" y="9" width="2" height="6" rx="1" />
      <rect x="19" y="9" width="2" height="6" rx="1" />
    </svg>
  )
}

function Calendar({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function Chat({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function Star({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 17.3l-4.6 2.7 1-5.4L4 11l5.5-.8L12 5l2.5 5.2L20 11l-4.4 3.6 1 5.4z" />
    </svg>
  )
}

function Check({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function Phone({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.35 1.7.68 2.5a2 2 0 0 1-.45 2.11L9 9.91" />
    </svg>
  )
}

function Family({title, ...props}){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title} role="img" {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="9" cy="8" r="2" />
      <circle cx="15" cy="8" r="2" />
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
    </svg>
  )
}

const ICONS = {
  salad: Salad,
  rainbow: Rainbow,
  water: Water,
  clock: Clock,
  mindful: Mindful,
  plan: Plan,
  recipe: Recipe,
  progress: Progress,
  heart: Heart,
  apple: Apple,
  broccoli: Broccoli,
  carrot: CarrotIcon,
  leaf: Leaf,
  barbell: Barbell,
  calendar: Calendar,
  chat: Chat,
  star: Star,
  check: Check,
  phone: Phone,
  family: Family
}

export default function Icon({name, className = '', title, ...rest}){
  const Cmp = ICONS[name]
  if(!Cmp) return null
  return <Cmp title={title} className={className} {...rest} />
}
