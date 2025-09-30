import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const stats = [
  { label: 'Placement Rate', value: 95, suffix: '%', id: 'placement' },
  { label: 'Research Papers', value: 50, suffix: '+', id: 'papers' },
  { label: 'Industry Partners', value: 15, suffix: '+', id: 'partners' },
  { label: 'Student Projects', value: 100, suffix: '+', id: 'projects' }
]

const DepartmentHighlights = () => {
  const countRefs = useRef([])

  useEffect(() => {
    stats.forEach((stat, idx) => {
      gsap.fromTo(
        countRefs.current[idx],
        { innerText: 0 },
        {
          innerText: stat.value,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate: function () {
            const val = Math.floor(this.targets()[0].innerText)
            countRefs.current[idx].innerText = val + stat.suffix
          }
        }
      )
    })
  }, [])

  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Department Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={stat.id} className="p-6 rounded-xl shadow bg-white">
              <div
                ref={el => (countRefs.current[idx] = el)}
                className="text-4xl font-extrabold text-university-blue mb-2"
              >
                0{stat.suffix}
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentHighlights