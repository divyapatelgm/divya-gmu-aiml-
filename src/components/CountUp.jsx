import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CountUp = ({ value, suffix = '', className = '' }) => {
  const ref = useRef()

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        onUpdate: function () {
          const val = Math.floor(this.targets()[0].innerText)
          ref.current.innerText = val + suffix
        }
      }
    )
  }, [value, suffix])

  return <span ref={ref} className={className}>0{suffix}</span>
}

export default CountUp