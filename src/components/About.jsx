import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CountUp } from 'countup.js'

const About = () => {
  const sectionRef = useRef()
  const visionRef = useRef()
  const missionRef = useRef()
  const objectivesRef = useRef()
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

    tl.fromTo(visionRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    )
      .fromTo(missionRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(objectivesRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )

    // CountUp for stats (reset & replay every time)
    statsRef.current.forEach((el) => {
      if (!el) return
      const end = Number(el.getAttribute('data-end')) || 0
      const suffix = el.getAttribute('data-suffix') || ''
      const counter = new CountUp(el, end, { duration: 2, suffix })

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (!counter.error) counter.start()
        },
        onLeaveBack: () => {
          // reset back to 0 so it can re-animate
          el.innerText = `0${suffix}`
        },
        onEnterBack: () => {
          if (!counter.error) counter.start()
        }
      })
    })
  }, [])

  const objectives = [
    'Foster cutting-edge research in AI and ML',
    'Develop industry-ready professionals',
    'Promote ethical AI practices',
    'Bridge the gap between academia and industry',
    'Create innovative solutions for real-world problems'
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-white"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-university-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-university-indigo/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-university-purple/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-university-gradient bg-clip-text text-transparent">
              About Our Department
            </span>
          </h2>
          <div className="w-24 h-1 bg-university-gradient mx-auto rounded-full"></div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div
            ref={visionRef}
            className="group relative p-8 university-card hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-university-gradient/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-university-gradient rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-3xl font-orbitron font-bold text-text-primary">Our Vision</h3>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                To be a globally recognized center of excellence in Artificial Intelligence and Machine Learning,
                fostering innovation, research, and education that shapes the future of intelligent systems and
                contributes to solving complex real-world challenges.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            ref={missionRef}
            className="group relative p-8 university-card hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-university-gradient-warm/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-university-gradient-warm rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-3xl font-orbitron font-bold text-text-primary">Our Mission</h3>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                To provide world-class education and research opportunities in AI and ML,
                develop industry-ready professionals, promote ethical AI practices, and
                create innovative solutions that benefit society while maintaining the
                highest standards of academic excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div
          ref={objectivesRef}
          className="relative p-8 university-card"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-university-gradient-cool rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-text-primary">Key Objectives</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group relative p-6 university-card hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-university-gradient-cool rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center group">
            <div
              ref={el => statsRef.current[0] = el}
              data-end="500"
              data-suffix="+"
              className="text-4xl md:text-5xl font-orbitron font-bold text-university-blue mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              0+
            </div>
            <div className="text-text-secondary font-medium">
              Students
            </div>
          </div>
          <div className="text-center group">
            <div
              ref={el => statsRef.current[1] = el}
              data-end="25"
              data-suffix="+"
              className="text-4xl md:text-5xl font-orbitron font-bold text-university-blue mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              0+
            </div>
            <div className="text-text-secondary font-medium">
              Faculty
            </div>
          </div>
          <div className="text-center group">
            <div
              ref={el => statsRef.current[2] = el}
              data-end="50"
              data-suffix="+"
              className="text-4xl md:text-5xl font-orbitron font-bold text-university-blue mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              0+
            </div>
            <div className="text-text-secondary font-medium">
              Research Papers
            </div>
          </div>
          <div className="text-center group">
            <div
              ref={el => statsRef.current[3] = el}
              data-end="15"
              data-suffix="+"
              className="text-4xl md:text-5xl font-orbitron font-bold text-university-blue mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              0+
            </div>
            <div className="text-text-secondary font-medium">
              Industry Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
