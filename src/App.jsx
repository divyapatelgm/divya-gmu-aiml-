import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// Removed AIMLShowcase as per request
import HeadOfDepartment from './components/HeadOfDepartment'
import Highlights from './components/Highlights'
import StudentLife from './components/StudentLife'
import EventsCarousel from './components/EventsCarousel'
import Programs from './components/Programs'
import Faculty from './components/Faculty'
import Alumni from './components/Alumni'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.set('.fade-in', { opacity: 0, y: 50 })
    
    ScrollTrigger.batch('.fade-in', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out'
        })
      }
    })

    // Cursor trail effect
    const cursor = document.createElement('div')
    cursor.className = 'fixed w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-50 mix-blend-difference'
    cursor.style.opacity = '0.7'
    document.body.appendChild(cursor)

    const updateCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1
      })
    }

    document.addEventListener('mousemove', updateCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <HeadOfDepartment />
      <Highlights />
      <StudentLife />
      <EventsCarousel />
      <Programs />
      <Faculty />
      <Alumni />
      <Footer />
    </div>
  )
}

export default App
