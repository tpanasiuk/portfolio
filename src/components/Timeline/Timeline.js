import React, { useEffect, useRef } from 'react'
import './Timeline.scss'

const experience = [
  {
    year: '05.2024 — Present',
    title: 'Web Developer',
    company: 'SmartRecruiters',
    description: 'Creating and optimizing career websites using React, TypeScript, and SCSS.',
    align: 'left',
  },
  {
    year: '03.2023 — 04.2024',
    title: 'Software Engineer',
    company: 'Cornerstone OnDemand',
    description: 'Developed login page management with React, Redux, and TypeScript.',
    align: 'right',
  },
  {
    year: '08.2022 — 03.2023',
    title: 'Associate Software Engineer',
    company: 'Cornerstone OnDemand',
    description: 'Built branded web components and career site tools using Vue.js and Less.',
    align: 'left',
  },
  {
    year: '01.2019 — 07.2020',
    title: 'Junior Front Office Developer',
    company: 'Saba Software',
    description: 'Styled and configured recruitment pages using Bootstrap and WordPress.',
    align: 'right',
  },
  {
    year: '02.2017 — 08.2018',
    title: 'Customer Service Representative',
    company: 'Arvato Finance',
    description: 'Supported financial service clients and ensured data privacy compliance.',
    align: 'left',
  },
]

const TimelineExperience = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            entry.target.classList.remove('is-hidden')
          } else {
            entry.target.classList.remove('is-visible')
            entry.target.classList.add('is-hidden')
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = containerRef.current.querySelectorAll('.timeline__item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="timeline">
      <h2 className="timeline__heading">My experience</h2>
      <div className="timeline__container" ref={containerRef}>
        {experience.map((item, index) => (
          <div key={index} className={`timeline__item timeline__item--${item.align}`}>
            <div className="timeline__bubble">
              <span className="timeline__year">{item.year}</span>
            </div>
            <div className="timeline__content">
              <h3 className="timeline__title">{item.title}</h3>
              <h4 className="timeline__company">{item.company}</h4>
              <p className="timeline__description">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline__line"></div>
      </div>
    </section>
  )
}

export default TimelineExperience
