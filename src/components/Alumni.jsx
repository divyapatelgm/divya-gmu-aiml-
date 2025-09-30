import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CountUp } from 'countup.js'
import { motion } from 'framer-motion'

const Alumni = () => {
  const sectionRef = useRef()
  const alumniRef = useRef([])
  const statsRef = useRef([])

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

    tl.fromTo(
      '.alumni-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      alumniRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.5'
    )

    const counters = statsRef.current.filter(Boolean)
    counters.forEach((el) => {
      const end = Number(el.getAttribute('data-end')) || 0
      const prefix = el.getAttribute('data-prefix') || ''
      const suffix = el.getAttribute('data-suffix') || ''
      const counter = new CountUp(el, end, { duration: 2, prefix, suffix })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (!counter.error) counter.start()
        }
      })
    })
  }, [])

  const alumni = [
    { name: 'Priya Sharma', batch: '2020', currentPosition: 'Senior AI Engineer', company: 'Google', achievement: 'Led development of ML models serving 1B+ users', image: '👩‍💻' },
    { name: 'Arjun Patel', batch: '2019', currentPosition: 'Data Science Manager', company: 'Microsoft', achievement: 'Built recommendation systems for Azure AI services', image: '👨‍💼' },
    { name: 'Sneha Reddy', batch: '2021', currentPosition: 'ML Research Scientist', company: 'OpenAI', achievement: 'Contributed to GPT-4 development and research', image: '👩‍🔬' },
    { name: 'Rahul Kumar', batch: '2018', currentPosition: 'AI Product Manager', company: 'Amazon', achievement: 'Launched AI-powered features for AWS services', image: '👨‍💻' },
    { name: 'Ananya Singh', batch: '2020', currentPosition: 'Computer Vision Engineer', company: 'Tesla', achievement: 'Developed autonomous driving algorithms', image: '👩‍🚀' },
    { name: 'Vikram Joshi', batch: '2019', currentPosition: 'NLP Research Lead', company: 'Meta', achievement: 'Advanced natural language understanding models', image: '👨‍🔬' }
  ]

  const partners = [
    { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-1.svg' },
    { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg' },
    { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
    { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
    { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
    { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-11.svg' },
    { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
    { name: 'IBM', logo: 'https://cdn.worldvectorlogo.com/logos/ibm-3.svg' },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="alumni-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-university-gradient bg-clip-text text-transparent">Alumni Success Stories</span>
          </h2>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {alumni.map((member, index) => (
            <div
              key={index}
              ref={el => alumniRef.current[index] = el}
              className="group relative p-6 university-card hover:scale-105"
            >
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-university-gradient flex items-center justify-center text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-orbitron font-bold mt-4">{member.name}</h3>
                <p className="text-sm text-text-secondary">Batch {member.batch}</p>
                <p className="text-sm text-university-indigo">{member.company}</p>
                <p className="text-xs mt-2">{member.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Companies */}
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-bold text-text-primary text-center mb-12">
            <span className="bg-university-gradient-cool bg-clip-text text-transparent">
              Our Placement Partners
            </span>
          </h3>

          <div className="overflow-hidden relative w-full py-6">
            <motion.div
              className="flex space-x-16"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{ width: '200%' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Placement Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <span ref={el => statsRef.current[0] = el} data-end="95" data-suffix="%">0%</span>
            <div>Placement Rate</div>
          </div>
          <div className="text-center">
            <span ref={el => statsRef.current[1] = el} data-end="12" data-prefix="₹" data-suffix="L">0</span>
            <div>Average Package</div>
          </div>
          <div className="text-center">
            <span ref={el => statsRef.current[2] = el} data-end="25" data-prefix="₹" data-suffix="L">0</span>
            <div>Highest Package</div>
          </div>
          <div className="text-center">
            <span ref={el => statsRef.current[3] = el} data-end="50" data-suffix="+">0</span>
            <div>Companies Visited</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alumni
