import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const EventsCarousel = () => {
  const sectionRef = useRef()
  const carouselRef = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample event images - in a real app, these would come from props or API
  const eventImages = [
    { id: 1, title: 'AI Hackathon 2024', description: '48-hour coding marathon' },
    { id: 2, title: 'Mallika Cultural Fest', description: 'Annual cultural celebration' },
    { id: 3, title: 'GM Idol Competition', description: 'Talent show extravaganza' },
    { id: 4, title: 'Tech Talk Series', description: 'Industry expert lectures' },
    { id: 5, title: 'Sports Day', description: 'GM League championships' },
    { id: 6, title: 'Research Symposium', description: 'Student research presentations' },
    { id: 7, title: 'Yoga & Wellness', description: 'Mindfulness and fitness' },
    { id: 8, title: 'Art Exhibition', description: 'Creative student showcase' }
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

    tl.fromTo('.events-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.events-carousel',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    )
  }, [])

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % eventImages.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, eventImages.length])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -currentSlide * 100,
        duration: 1,
        ease: 'power2.inOut'
      })
    }
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  return (
    <section 
      id="events"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-black to-deep-navy"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-purple/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="events-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Campus Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the vibrant campus life through our exciting events and activities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="events-carousel relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-neon-blue hover:bg-neon-blue/20 transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-neon-blue hover:bg-neon-blue/20 transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ width: `${eventImages.length * 100}%` }}
            >
              {eventImages.map((event, index) => (
                <div
                  key={event.id}
                  className="relative w-full h-96 md:h-[500px] flex-shrink-0"
                  style={{ width: `${100 / eventImages.length}%` }}
                >
                  {/* Event Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-electric-pink/20 rounded-2xl">
                    {/* Placeholder for actual event images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📸</div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-300">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

                  {/* Event Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-neon-blue scale-125 shadow-lg shadow-neon-blue/50'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-neon-green animate-pulse' : 'bg-gray-600'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Events Calendar CTA */}
        <div className="mt-16 text-center">
          <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                Stay Updated with Events
              </h3>
              <p className="text-gray-300 mb-6">
                Never miss out on exciting campus events and activities
              </p>
              
              <button className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105">
                View Events Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsCarousel