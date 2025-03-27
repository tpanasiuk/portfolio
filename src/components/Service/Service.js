import React from 'react'
import './Service.scss'
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlask,
  faTabletAlt,
  faMedal,
  faStickyNote,
  faClock,
  faPlug,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 1,
    icon: faFlask,
    title: 'Clean & Accessible Code',
    text: 'I write semantic HTML, accessible components, and follow WCAG guidelines to ensure inclusivity across devices and users.',
  },
  {
    id: 2,
    icon: faTabletAlt,
    title: 'Responsive Design',
    text: 'I develop responsive interfaces using mobile-first CSS and scalable layout techniques for seamless UX across all screen sizes.',
  },
  {
    id: 3,
    icon: faMedal,
    title: 'Design Implementation',
    text: 'I translate Figma designs into pixel-perfect components using React, SCSS, and CSS methodologies like BEM.',
  },
  {
    id: 4,
    icon: faStickyNote,
    title: 'Reusable Components',
    text: 'I create modular and testable UI components to speed up development and improve maintainability across projects.',
  },
  {
    id: 5,
    icon: faClock,
    title: 'Efficient Delivery',
    text: 'I follow Agile principles and CI/CD workflows to deliver high-quality code on time and with confidence.',
  },
  {
    id: 6,
    icon: faPlug,
    title: 'API Integration',
    text: 'I integrate various APIs into frontend projects and ensure smooth data flow with robust error handling and clean UX.',
  },
]

const Service = () => {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section ref={ref} className={`service ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="service__heading">My Frontend Expertise</h2>

      <div className="service__container" role="list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service__item"
            role="listitem"
            tabIndex={0}
            aria-label={`${service.title}: ${service.text}`}
          >
            <FontAwesomeIcon icon={service.icon} className="service__icon" />
            <div className="service__content">
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
