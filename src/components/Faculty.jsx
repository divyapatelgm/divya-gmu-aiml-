import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Faculty = () => {
  const sectionRef = useRef()
  const facultyRef = useRef([])

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

    tl.fromTo('.faculty-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(facultyRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.5'
    )
  }, [])

  const faculty = [
    {
      name: 'Ms. Jayalakshmi M',
      position: 'Assistant Professor',
      specialization: 'Machine Learning & Data Science',
      image: '/faculty/Jayalakshmi M Assistant Professor.jpg',
      research: 'Deep Learning, Computer Vision',
      publications: '25+ Research Papers'
    },
    {
      name: 'Mrs. Akshatha A M S',
      position: 'Assistant Professor',
      specialization: 'Artificial Intelligence & NLP',
      image: ' /faculty/AKSHATHA A M S.jpeg',
      research: 'Natural Language Processing, AI Ethics',
      publications: '20+ Research Papers'
    },
    {
      name: 'Mrs. Chaithra Dhumwad',
      position: 'Assistant Professor',
      specialization: 'Robotics & Intelligent Systems',
      image: '/faculty/Chaithra Dhumwad Assistant Professor.png',
      research: 'Autonomous Systems, AI in Healthcare',
      publications: '18+ Research Papers'
    },
    {
      name: 'Ms. Rakshitha J N',
      position: 'Assistant Professor',
      specialization: 'Computer Vision & Pattern Recognition',
      image: '/faculty/RAKSHITHA J N ASSISTANT PROFESSOR-AIML.jpg',
      research: 'Image Processing, Medical AI',
      publications: '22+ Research Papers'
    },
    {
      name: 'Mr. Praveen R',
      position: 'Assistant Professor',
      specialization: 'Neural Networks & Deep Learning',
      image: ' /faculty/PRAVEEN R.jpeg',
      research: 'Deep Learning Architectures, AI Applications',
      publications: '19+ Research Papers'
    },
    {
      name: 'Ms. Mukta Pujar',
      position: 'Assistant Professor',
      specialization: 'AI Ethics & Responsible AI',
      image: '/faculty/MUKTA PUJAR.jpeg',
      research: 'Ethical AI, Bias in ML Systems',
      publications: '16+ Research Papers'
    }
  ]

  const tutors = [
    { name: 'Anusha A Nadiger', image: '/faculty/ANUSHA A NADIGER TUTOR-AIML.jpg' },
    { name: 'Anusha N L', image: '/faculty/ANUSHA N L TUTOR-AIML.jpg' },
    { name: 'Bhoomika B R', image: '/faculty/BHOOMIKA B R TUTOR-AIML.jpg' },
    { name: 'Chethan G S', image: '/faculty/Chethan G S Tutor.jpg' },
    { name: 'Darshan A', image: '/faculty/Darshan A Tutor.jpg' },
    { name: 'Kavya K N', image: '/faculty/Kavya K N Tutor.jpg' },
    { name: 'Mohammed Zeeshan Mukram', image: '/faculty/MOHAMMED ZEESHAN MUKRAM TUTOR-AIML.jpg' },
    { name: 'Preethi N M', image: '/faculty/PREETHI N M TUTOR-AIML.jpg' },
    { name: 'Ms. Veena C S', image: '/faculty/Veena C S Assistant Professor.jpg' },
    { name: 'Mrs. Deepa Ashok', image: '/faculty/Deepa Ashok.jpg' }
  ]

  return (
    <section 
      id="faculty"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-university-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-university-indigo/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-university-gradient/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="faculty-title text-5xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-university-gradient bg-clip-text text-transparent">
              Faculty & Research
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-medium">
            Meet our distinguished faculty members who are leading the way in AI and ML research
          </p>
          <div className="w-24 h-1 bg-university-gradient mx-auto rounded-full"></div>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {faculty.map((member, index) => (
            <div
              key={index}
              ref={el => facultyRef.current[index] = el}
              className="group relative p-6 university-card hover:scale-105"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-university-gradient/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Faculty Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-border-light group-hover:border-university-blue transition-colors duration-300 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjZjhmOWZhIi8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDgiIHI9IjIwIiBmaWxsPSIjNjM3MjgwIi8+CjxwYXRoIGQ9Ik0yMCAxMDhDMTIgMTA4IDI0IDg4IDY0IDg4QzEwNCA4OCAxMTYgMTA4IDEwOCAxMDhIMjBaIiBmaWxsPSIjNjM3MjgwIi8+Cjwvc3ZnPgo='
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-university-gradient rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">👨‍🏫</span>
                  </div>
                </div>
                
                {/* Faculty Info */}
                <div className="text-center">
                  <h3 className="text-xl font-orbitron font-bold text-text-primary mb-2 group-hover:text-university-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-university-blue font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.position}
                  </p>
                  <p className="text-text-secondary text-sm mb-3 font-medium">
                    {member.specialization}
                  </p>
                  
                  <div className="space-y-2 text-xs text-text-tertiary">
                    <div className="flex items-center justify-center space-x-2">
                      <span>🔬</span>
                      <span>{member.research}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📚</span>
                      <span>{member.publications}</span>
                    </div>
                  </div>
                  {member.linkedin && (
                    <div className="mt-4">
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-university-blue hover:text-university-navy font-medium">
                        <span className="mr-2">in</span>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tutors Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-bold text-text-primary text-center mb-12">
            <span className="bg-university-gradient-cool bg-clip-text text-transparent">
              Our Lecturers
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className="group relative p-4 university-card hover:scale-105"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-border-light group-hover:border-university-emerald transition-colors duration-300 shadow-md">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjhmOWZhIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjEyIiBmaWxsPSIjNjM3MjgwIi8+CjxwYXRoIGQ9Ik0xMCA2NEMxMCA2NCAyMCA1MCA0MCA1MEM2MCA1MCA3MCA2NCA3MCA2NEgxMFoiIGZpbGw9IiM2Mzc0ODAiLz4KPC9zdmc+Cg=='
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-university-gradient-cool rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs">👩‍🏫</span>
                  </div>
                </div>
                
                <div className="text-center mt-3">
                  <h4 className="text-sm font-medium text-text-primary group-hover:text-university-emerald transition-colors duration-300">
                    {tutor.name}
                  </h4>
                  <p className="text-xs text-text-tertiary font-medium">Lecturer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Highlights */}
        <div className="relative p-8 university-card shadow-xl">
          <div className="absolute inset-0 bg-university-gradient/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-orbitron font-bold text-text-primary mb-8 text-center">
              Research Excellence
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-university-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">150+ Publications</h4>
                <p className="text-text-secondary font-medium">Research papers in top-tier conferences and journals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-university-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">25+ Awards</h4>
                <p className="text-text-secondary font-medium">Recognition for outstanding research contributions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-university-gradient-cool rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-orbitron font-bold text-text-primary mb-2">15+ Collaborations</h4>
                <p className="text-text-secondary font-medium">Industry and academic partnerships worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faculty
