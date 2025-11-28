import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ behavior = 'smooth' }){
  const { pathname } = useLocation()

  useEffect(()=>{
    // small timeout to allow route content to render (optional)
    const t = setTimeout(()=>{
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo({ top: 0, left: 0, behavior })
      }
    }, 0)
    return ()=> clearTimeout(t)
  }, [pathname, behavior])

  return null
}
