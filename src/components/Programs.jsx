import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Programs = () => {
  const sectionRef = useRef()
  const programsRef = useRef([])

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

    tl.fromTo('.programs-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(programsRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'power2.out' },
      '-=0.5'
    )
  }, [])

  const programs = [
    {
      level: 'Undergraduate',
      title: 'B.Tech. in CS - Artificial Intelligence & Machine Learning',
      duration: '4 Years',
      credits: '160 Credits',
      description: 'Comprehensive undergraduate program covering fundamentals of AI, ML, data science, and software engineering.',
      features: [
        'Core AI/ML algorithms and techniques',
        'Programming languages (Python, R, Java)',
        'Data structures and algorithms',
        'Database management systems',
        'Software engineering principles',
        'Industry internships and projects'
      ],
      gradient: 'university-gradient',
      bgGradient: 'university-gradient/5'
    },
    {
      level: 'Postgraduate',
      title: 'M.Tech in Artificial Intelligence & Machine Learning',
      duration: '2 Years',
      credits: '80 Credits',
      description: 'Advanced postgraduate program focusing on cutting-edge AI research, deep learning, and specialized applications.',
      features: [
        'Advanced machine learning algorithms',
        'Deep learning and neural networks',
        'Natural language processing',
        'Computer vision and image processing',
        'Research methodology and thesis',
        'Industry collaboration projects'
      ],
      gradient: 'university-gradient-warm',
      bgGradient: 'university-gradient-warm/5'
    }
  ]

  return (
    <section 
      id="programs"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-university-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-university-indigo/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-university-purple/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="programs-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-university-gradient bg-clip-text text-transparent">
              Academic Programs
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-medium">
            Choose from our comprehensive range of AI and ML programs designed to shape the future of technology
          </p>
          <div className="w-24 h-1 bg-university-gradient mx-auto rounded-full"></div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <div
              key={index}
              ref={el => programsRef.current[index] = el}
              className="group relative"
            >
              <div className="relative p-8 md:p-12 university-card hover:shadow-2xl">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-${program.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Program Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-${program.gradient} rounded-lg flex items-center justify-center mr-4`}>
                          <span className="text-white font-bold text-lg">
                            {program.level === 'Undergraduate' ? 'UG' : program.level === 'Postgraduate' ? 'PG' : 'PhD'}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-orbitron font-bold text-text-primary group-hover:text-university-blue transition-colors duration-300">
                            {program.level}
                          </h3>
                          <div className={`w-16 h-1 bg-${program.gradient} rounded-full mt-2`}></div>
                        </div>
                      </div>
                      
                      <h4 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary mb-4 group-hover:text-university-blue transition-colors duration-300">
                        {program.title}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="text-lg text-text-secondary">
                        <span className="font-semibold">Duration:</span> {program.duration}
                      </div>
                      <div className="text-lg text-text-secondary">
                        <span className="font-semibold">Credits:</span> {program.credits}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {program.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 p-4 university-card hover:shadow-lg"
                      >
                        <div className={`w-2 h-2 bg-${program.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`px-8 py-3 bg-${program.gradient} text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Apply Now
                    </button>
                    <button className="university-btn-secondary px-8 py-3 rounded-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admission Requirements */}
        <div className="mt-20">
          <div className="relative p-8 university-card">
            <div className="absolute inset-0 bg-university-gradient/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron font-bold text-text-primary mb-8 text-center">
                Admission Requirements
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-university-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">Academic Excellence</h4>
                  <p className="text-text-secondary">Strong foundation in mathematics, physics, and computer science</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-university-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">Entrance Exams</h4>
                  <p className="text-text-secondary">Qualify in relevant entrance examinations and interviews</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-university-gradient-cool rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">Innovation Mindset</h4>
                  <p className="text-text-secondary">Passion for technology and problem-solving abilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
