import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import './Statistics.scss'

const statisticsData = [
  { id: 1, number: 1000, label: 'Dedicated employees driving innovation every day' },
  { id: 2, number: 380, label: 'A rapidly expanding global community of enthusiasts' },
  { id: 3, number: 114, label: 'Award-winning projects and industry-leading solutions' },
  { id: 4, number: 20, label: 'Cutting-edge updates and improvements released annually' },
]

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="statistics" ref={ref}>
      <div className="statistics__container">
        <h2 className="statistics__heading">Our company in numbers</h2>
        <div className="statistics__grid">
          {statisticsData.map((stat) => (
            <div key={stat.id} className="statistics__item">
              <h2 className="statistics__number">
                {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}
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
