import React, { useEffect, useRef } from 'react'
import './Skills.scss'

import jsIcon from '../../assets/img/icons/js.png'
import tsIcon from '../../assets/img/icons/ts.png'
import htmlIcon from '../../assets/img/icons/html.png'
import cssIcon from '../../assets/img/icons/css.png'
import reactIcon from '../../assets/img/icons/react.png'
import vueIcon from '../../assets/img/icons/vue.png'
import jqueryIcon from '../../assets/img/icons/jquery.png'
import bootstrapIcon from '../../assets/img/icons/bootstrap.png'
import jestIcon from '../../assets/img/icons/jest.png'
import gitIcon from '../../assets/img/icons/git.svg'
import githubIcon from '../../assets/img/icons/github.png'
import jenkinsIcon from '../../assets/img/icons/jenkins.png'
import figmaIcon from '../../assets/img/icons/figma.png'
import wordpressIcon from '../../assets/img/icons/wp.png'

const skillCategories = [
  {
    title: 'Languages & Markup',
    items: [
      { label: 'JavaScript', icon: jsIcon },
      { label: 'TypeScript', icon: tsIcon },
      { label: 'HTML5', icon: htmlIcon },
      { label: 'CSS3 / SCSS', icon: cssIcon },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { label: 'React', icon: reactIcon },
      { label: 'Vue.js', icon: vueIcon },
      { label: 'jQuery', icon: jqueryIcon },
      { label: 'Bootstrap', icon: bootstrapIcon },
    ],
  },
  {
    title: 'Testing & Tools',
    items: [
      { label: 'Jest', icon: jestIcon },
      { label: 'Git', icon: gitIcon },
      { label: 'GitHub', icon: githubIcon },
      { label: 'Jenkins', icon: jenkinsIcon },
    ],
  },
  {
    title: 'Design & Editors',
    items: [
      { label: 'Figma', icon: figmaIcon },
      { label: 'WordPress', icon: wordpressIcon },
    ],
  },
]

const Skills = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );


    const items = containerRef.current.querySelectorAll('.skills-tools__card')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-tools">
      <h2 className="skills-tools__heading">Technologies & Skills</h2>
      <div className="skills-tools__grid" ref={containerRef}>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`skills-tools__card skills-tools__card--${
              index % 2 === 0 ? 'left' : 'right'
            }`}
          >
            <h3 className="skills-tools__title">{category.title}</h3>
            <div className="skills-tools__items">
              {category.items.map((item, idx) => (
                <div key={idx} className="skills-tools__item">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="skills-tools__icon"
                    loading="lazy"
                  />
                  <span className="skills-tools__label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
