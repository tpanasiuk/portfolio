import React, { useEffect, useRef } from 'react'
import './Timeline.scss'

const experience = [
  {
    year: '05.2024 — Present',
    title: 'Web Developer',
    company: 'SmartRecruiters',
    description:
      'Developed career websites based on Figma designs, ensuring accurate implementation of layouts, typography and design components. Created and optimized web-components following mobile-first approach and accessibility guidelines.',
    align: 'left',
  },
  {
    year: '03.2023 — 04.2024',
    title: 'Software Engineer',
    company: 'Cornerstone OnDemand',
    description: 'Developed application for customized login page management.',
    align: 'right',
  },
  {
    year: '08.2022 — 03.2023',
    title: 'Associate Software Engineer',
    company: 'Cornerstone OnDemand',
    description:
      "Created custom branded web components based on customers' requirements and mock-ups. Customized the customers' career websites and extended their functionality. Developed the tool for managing branding specification requirements.",
    align: 'left',
  },
  {
    year: '01.2019 — 07.2020',
    title: 'Junior Front Office Developer',
    company: 'Saba Software',
    description:
      "Configured the recruitment platform and delivered JavaScript based components. Integrated customers' job applications to web pages and WordPress CMS, configured and styled this according to branding guidelines.",
    align: 'right',
  },
  {
    year: '02.2017 — 08.2018',
    title: 'Customer Service Representative',
    company: 'Arvato Finance',
    description:
      'Provided high quality online customer service related to Google Ads, Google Analytics, Google Tag Manager. Planned and maintained the team schedule to make sure the workflow is followed. Reported the overall team performance on a daily basis and creating weekly reports.',
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
              <ul className="timeline__description">
                {item.description
                  .split('. ')
                  .filter((sentence) => sentence.trim() !== '')
                  .map((sentence, index) => (
                    <li key={index}>{sentence.trim().replace(/\.$/, '')}.</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline__line"></div>
      </div>
    </section>
  )
}

export default TimelineExperience
