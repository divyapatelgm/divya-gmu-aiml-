import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const StudentLife = () => {
  const sectionRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.studentlife-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  // Sample images
  const academicEvents = [
    {
      name: 'AI Hackathons',
      description: '48-hour coding marathons solving real-world problems',
      image: 'https://source.unsplash.com/800x500/?coding,ai'
    },
    {
      name: 'Guest Lectures',
      description: 'Industry experts sharing latest AI trends and insights',
      image: 'https://source.unsplash.com/800x500/?lecture,university'
    },
    {
      name: 'Research Seminars',
      description: 'Faculty and student research presentations',
      image: 'https://source.unsplash.com/800x500/?seminar,ai'
    },
    {
      name: 'Tech Talks',
      description: 'Weekly technical discussions on AI/ML topics',
      image: 'https://source.unsplash.com/800x500/?hackathon,tech'
    }
  ]

  const culturalEvents = [
    {
      name: 'Mallika',
      description: 'Annual cultural festival celebrating diversity and creativity',
      image: 'https://source.unsplash.com/800x500/?festival,culture'
    },
    {
      name: 'GM Idol',
      description: 'Talent show showcasing student musical and artistic abilities',
      image: 'https://source.unsplash.com/800x500/?music,students'
    },
    {
      name: 'Festivals',
      description: 'Celebrations of various cultural and religious festivals',
      image: 'https://source.unsplash.com/800x500/?dance,festival'
    },
    {
      name: 'Art Exhibitions',
      description: 'Showcasing student artwork and creative projects',
      image: 'https://source.unsplash.com/800x500/?art,exhibition'
    }
  ]

  const sportsEvents = [
    {
      name: 'GM League',
      description: 'Inter-department sports competitions and tournaments',
      image: 'https://source.unsplash.com/800x500/?football,sports'
    },
    {
      name: 'Yoga Sessions',
      description: 'Regular yoga and meditation classes for wellness',
      image: 'https://source.unsplash.com/800x500/?yoga,students'
    },
    {
      name: 'Gym Facilities',
      description: 'State-of-the-art fitness center for students',
      image: 'https://source.unsplash.com/800x500/?gym,fitness'
    },
    {
      name: 'Sports Clubs',
      description: 'Various sports clubs including cricket, football, and more',
      image: 'https://source.unsplash.com/800x500/?cricket,students'
    }
  ]

  const sections = [
    { category: '🎓 Academic Events', events: academicEvents },
    { category: '🎭 Cultural Events', events: culturalEvents },
    { category: '⚽ Sports & Fitness', events: sportsEvents }
  ]

  return (
    <section
      id="studentlife"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="studentlife-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
          <span className="bg-university-gradient bg-clip-text text-transparent">
            Student Life & Activities
          </span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-medium">
          Beyond academics, discover a vibrant campus life filled with opportunities for growth, creativity, and fun
        </p>
        <div className="w-24 h-1 bg-university-gradient mx-auto rounded-full"></div>
      </div>

      {/* Sections Carousel */}
      <div className="space-y-20">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* Left-aligned heading with emoji/icon */}
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-orbitron font-bold text-text-primary">
                {section.category}
              </h3>
            </div>

            <div className="overflow-hidden w-full relative">
              <div className="flex animate-marquee space-x-6">
                {section.events.concat(section.events).map((event, i) => (
                  <div key={i} className="relative w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay text */}
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                      <h4 className="text-white text-lg font-bold">{event.name}</h4>
                      <p className="text-white text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee animation style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </section>
  )
}

export default StudentLife
