import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
  const footerRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Alumni', href: '#alumni' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary border-t border-border-light"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-university-gradient"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-university-blue/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-university-indigo/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-university-gradient rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">AI</span>
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-text-primary">AIML Department</h3>
                <p className="text-text-secondary">GM University</p>
              </div>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
              Leading the future of Artificial Intelligence and Machine Learning education. 
              Empowering students to become the next generation of AI innovators and researchers.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 university-card rounded-full flex items-center justify-center hover:border-university-blue hover:bg-university-blue/10 transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-university-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-university-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-text-primary mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-university-blue text-lg">📍</span>
                <div>
                  <p className="text-text-secondary text-sm">
                    GM University Campus<br />
                    Department of AIML<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-university-blue text-lg">📧</span>
                <p className="text-text-secondary text-sm">aiml@gmuniversity.edu</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-university-blue text-lg">📞</span>
                <p className="text-text-secondary text-sm">+91 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative p-8 university-card mb-12">
          <div className="absolute inset-0 bg-university-gradient/5 rounded-2xl"></div>
          
          <div className="relative z-10 text-center">
            <h4 className="text-2xl font-orbitron font-bold text-text-primary mb-4">
              Stay Updated with AIML News
            </h4>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on AI research, events, and opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 university-card rounded-full text-text-primary placeholder-text-tertiary focus:outline-none focus:border-university-blue transition-colors duration-300"
              />
              <button className="university-btn-primary px-8 py-3 rounded-full transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-text-tertiary text-sm mb-4 md:mb-0">
              © 2024 GM University - Department of AIML. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-text-tertiary hover:text-university-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-text-tertiary hover:text-university-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-text-tertiary hover:text-university-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-university-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
