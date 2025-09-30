import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AIMLShowcase = () => {
  const sectionRef = useRef()
  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const domains = [
    {
      id: 1,
      title: 'Neural Networks',
      subtitle: 'Deep Learning & Neural Networks',
      emoji: '🧠',
      description: 'Exploring the architecture of artificial neural networks and deep learning algorithms that mimic human brain functions.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      id: 2,
      title: 'Robotics',
      subtitle: 'Robotics & Intelligent Systems',
      emoji: '🤖',
      description: 'Developing autonomous robots and intelligent systems that can perceive, learn, and interact with their environment.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 3,
      title: 'NLP',
      subtitle: 'Natural Language Processing',
      emoji: '🗣️',
      description: 'Teaching machines to understand, interpret, and generate human language through advanced linguistic algorithms.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-900/20 to-emerald-900/20'
    },
    {
      id: 4,
      title: 'Computer Vision',
      subtitle: 'Computer Vision & Recognition',
      emoji: '👁️',
      description: 'Enabling machines to interpret and understand visual information from the world around us.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-900/20 to-red-900/20'
    },
    {
      id: 5,
      title: 'Autonomous Vehicles',
      subtitle: 'AI in Autonomous Driving',
      emoji: '🚗',
      description: 'Pioneering the future of transportation with self-driving vehicles powered by AI and machine learning.',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-900/20 to-blue-900/20'
    },
    {
      id: 6,
      title: 'Healthcare AI',
      subtitle: 'AI for Health & Well-being',
      emoji: '❤️‍🩹',
      description: 'Revolutionizing healthcare through AI-powered diagnostics, treatment planning, and medical research.',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-900/20 to-rose-900/20'
    },
    {
      id: 7,
      title: 'Reinforcement Learning',
      subtitle: 'Learning through Experience',
      emoji: '🎮',
      description: 'Teaching AI agents to make decisions through trial and error, learning from their interactions with the environment.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-900/20 to-orange-900/20'
    },
    {
      id: 8,
      title: 'Multi-Agent Systems',
      subtitle: 'AI Agents Working Together',
      emoji: '🌐',
      description: 'Creating intelligent systems where multiple AI agents collaborate to solve complex problems.',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-900/20 to-cyan-900/20'
    },
    {
      id: 9,
      title: 'Generative AI',
      subtitle: 'Creativity with Generative AI',
      emoji: '🎨',
      description: 'Unleashing creativity through AI that can generate art, music, text, and other creative content.',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-900/20 to-purple-900/20'
    },
    {
      id: 10,
      title: 'Quantum AI',
      subtitle: 'The Future: Quantum AI',
      emoji: '⚛️',
      description: 'Exploring the intersection of quantum computing and artificial intelligence for unprecedented computational power.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 11,
      title: 'AI Ethics & Privacy',
      subtitle: 'Responsible & Ethical AI',
      emoji: '🔒',
      description: 'Ensuring AI development follows ethical principles and protects user privacy and data security.',
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-900/20 to-slate-900/20'
    },
    {
      id: 12,
      title: 'Future Applications',
      subtitle: 'AI Across Every Industry',
      emoji: '🚀',
      description: 'Exploring limitless possibilities of AI applications across industries and everyday life.',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-900/20 to-pink-900/20'
    }
  ]

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

    tl.fromTo('.showcase-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.showcase-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
  }, [])

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % domains.length)
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, domains.length])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        rotationY: currentIndex * 30,
        duration: 1.5,
        ease: 'power2.inOut'
      })
    }
  }, [currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section 
      id="showcase"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-deep-navy to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-neon-blue/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-neon-purple/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="showcase-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-electric-pink bg-clip-text text-transparent">
              AIML Domains
            </span>
          </h2>
          <p className="showcase-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the diverse and exciting fields of Artificial Intelligence and Machine Learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 md:h-[500px] perspective-1000 mb-12">
          <div 
            ref={carouselRef}
            className="relative w-full h-full transform-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {domains.map((domain, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + domains.length) % domains.length
              const isNext = index === (currentIndex + 1) % domains.length
              
              let transform = `rotateY(${index * 30}deg) translateZ(300px)`
              let opacity = 0.3
              let scale = 0.8
              
              if (isActive) {
                transform = `rotateY(${index * 30}deg) translateZ(400px)`
                opacity = 1
                scale = 1
              } else if (isPrev || isNext) {
                opacity = 0.6
                scale = 0.9
              }

              return (
                <div
                  key={domain.id}
                  className="absolute inset-0 transition-all duration-1000"
                  style={{
                    transform,
                    opacity,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div 
                    className={`relative w-full h-full p-8 rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${
                      isActive ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${domain.bgGradient.split(' ')[0]} 0%, ${domain.bgGradient.split(' ')[2]} 100%)`,
                      transform: `scale(${scale})`
                    }}
                  >
                    {/* Content */}
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-6xl mb-4">{domain.emoji}</div>
                      <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
                        {domain.title}
                      </h3>
                      <h4 className={`text-lg md:text-xl font-medium mb-4 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                        {domain.subtitle}
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                        {domain.description}
                      </p>
                    </div>

                    {/* Glow effect for active card */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 animate-pulse"></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {domains.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-neon-blue scale-125 shadow-lg shadow-neon-blue/50'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIMLShowcase
