import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeadOfDepartment = () => {
  const sectionRef = useRef()
  const imageCardRef = useRef()
  const textRef = useRef()

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
      '.hod-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
      .fromTo(
        imageCardRef.current,
        { opacity: 0, x: -80, rotate: -3, scale: 0.95 },
        { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
  }, [])

  return (
    <section id="hod" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-black to-deep-navy"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-28 h-28 bg-neon-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 right-12 w-40 h-40 bg-neon-purple/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animation: `float ${4 + Math.random() * 5}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="hod-title text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Head of the Department
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div
              ref={imageCardRef}
              className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-neon-blue/20 hover:border-neon-blue/50 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                <img
                  src="/faculty/asha-hod.png"
                  alt="Dr. Asha K, Head of Department"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzMzMzMzIi8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDgiIHI9IjIwIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0yMCAxMDhDMTIgMTA4IDI0IDg4IDY0IDg4QzEwNCA4OCAxMTYgMTA4IDEwOCAxMDhIMjBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo='
                  }}
                />
              </div>
            </div>
          </div>
          <div ref={textRef} className="md:col-span-2">
            <h3 className="text-2xl font-orbitron font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">Dr. Asha K</h3>
            <p className="text-neon-blue font-medium mb-3">Head of Department</p>
            <p className="text-gray-300 leading-relaxed">
              Welcome to the Department of Artificial Intelligence & Machine Learning. Our department is committed to excellence in teaching, research, and innovation, preparing students to become leaders in AI-driven industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadOfDepartment


