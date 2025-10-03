'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScroll({ children }) {
  const pathname = usePathname()
  const lenisRef = useRef(null)

  useEffect(() => {
  AOS.init({
    duration: 1200,
    once: false,
  })

  const elements = document.querySelectorAll('[data-aos]')
  
  elements.forEach(el => {
    el.addEventListener('aos:in', () => {
      console.log('AOS animation started on', el)
    })

    el.addEventListener('aos:out', () => {
      console.log('AOS animation ended on', el)
    })
  })

  return () => {
    elements.forEach(el => {
      el.removeEventListener('aos:in', () => {})
      el.removeEventListener('aos:out', () => {})
    })
  }
}, [])

  return (
    <div id="lenis-wrapper">
      {children}
    </div>
  )
}
