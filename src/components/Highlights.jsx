import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CountUp } from 'countup.js'

const Highlights = () => {
  const sectionRef = useRef()
  const cardsRef = useRef([])
  const highlightsStatsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo('.highlights-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(cardsRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.5'
    )
    // Count up for stats
    const counters = highlightsStatsRef.current.filter(Boolean)
    counters.forEach((el) => {
      const end = Number(el.getAttribute('data-end')) || 0
      const suffix = el.getAttribute('data-suffix') || ''
      const counter = new CountUp(el, end, { duration: 2, suffix })
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (!counter.error) counter.start()
        }
      })
    })
  }, [])

  const highlights = [
    {
      title: 'State-of-the-Art Labs',
      description: 'Cutting-edge AI and ML laboratories equipped with the latest hardware and software.',
      icon: '🔬',
      gradient: 'university-gradient'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading tech companies for internships and research projects.',
      icon: '🤝',
      gradient: 'university-gradient-warm'
    },
    {
      title: 'Research Publications',
      description: 'Faculty and students regularly publish in top-tier AI and ML conferences.',
      icon: '📚',
      gradient: 'university-gradient-cool'
    },
    {
      title: 'Hackathons & Competitions',
      description: 'Regular coding competitions and hackathons to foster innovation and creativity.',
      icon: '🏆',
      gradient: 'university-gradient'
    },
    {
      title: 'Guest Lectures',
      description: 'Industry experts and researchers share insights on the latest AI developments.',
      icon: '🎤',
      gradient: 'university-gradient-warm'
    },
    {
      title: 'Student Projects',
      description: 'Hands-on projects that solve real-world problems using AI and ML techniques.',
      icon: '💡',
      gradient: 'university-gradient-cool'
    }
  ]

  return (
    <section 
      id="highlights"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-university-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-university-indigo/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="highlights-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-university-gradient bg-clip-text text-transparent">
              Department Highlights
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-medium">
            Discover what makes our AIML department a leader in artificial intelligence education and research
          </p>
          <div className="w-24 h-1 bg-university-gradient mx-auto rounded-full"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative p-8 university-card hover:scale-105"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-${highlight.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-orbitron font-bold text-text-primary mb-4 group-hover:text-university-blue transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-university-gradient/0 group-hover:bg-university-gradient/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 95, suffix: '%', label: 'Placement Rate' },
            { end: 50, suffix: '+', label: 'Research Papers' },
            { end: 15, suffix: '+', label: 'Industry Partners' },
            { end: 100, suffix: '+', label: 'Student Projects' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                <span ref={el => highlightsStatsRef.current[index] = el} data-end={stat.end} data-suffix={stat.suffix}>0</span>
              </div>
              <div className="text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
