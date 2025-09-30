import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Show navbar after hero section
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.8)
      
      // Update active section
      const sections = ['about', 'showcase', 'highlights', 'programs', 'faculty', 'alumni']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo('.navbar', 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )
    } else {
      gsap.to('.navbar', { y: -100, opacity: 0, duration: 0.5 })
    }
  }, [isVisible])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    
    { id: 'highlights', label: 'Highlights' },
    { id: 'programs', label: 'Programs' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'alumni', label: 'Alumni' }
  ]

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-university-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-text-primary">AIML Department</h1>
              <p className="text-xs text-text-secondary font-medium">GM University</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-university-blue'
                    : 'text-text-secondary hover:text-university-blue'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-university-blue rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('programs')}
              className="university-btn-primary px-6 py-2 rounded-full transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-text-primary p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background blur effect */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md -z-10 border-b border-border-light"></div>
    </nav>
  )
}

export default Navbar
