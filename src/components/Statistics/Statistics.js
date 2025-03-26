import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import './Statistics.scss'

const statisticsData = [
  { id: 1, number: 4, suffix: '+', label: 'Years of commercial frontend development experience' },
  {
    id: 2,
    number: 10,
    suffix: '',
    label: 'Frontend technologies mastered including JavaScript, React, TypeScript, SCSS, and more',
  },
  {
    id: 3,
    number: 3,
    suffix: '',
    label: 'Companies where I delivered high-quality production code',
  },
  { id: 4, number: 40, suffix: '+', label: 'Career websites and branding tools developed' },
]

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="statistics" ref={ref}>
      <div className="statistics__container">
        <h2 className="statistics__heading">My experience in numbers</h2>
        <div className="statistics__grid">
          {statisticsData.map((stat) => (
            <div key={stat.id} className="statistics__item">
              <h2 className="statistics__number">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </h2>
              <p className="statistics__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
