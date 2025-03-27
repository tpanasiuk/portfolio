import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './ContactDetails.scss'
import resumeFile from '../../assets/resume.pdf'
import profileImg from '../../assets/img/profile-img.jpg'

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="contact-details__wrapper">
        <div className="contact-details__image-container">
          <img src={profileImg} alt="Tetiana Panasiuk" className="contact-details__image" />
        </div>

        <div className="contact-details__content">
          <h2 className="contact-details__title">Get in Touch</h2>
          <ul className="contact-details__list">
            {[
              {
                icon: faEnvelope,
                label: 'tetianapanasiuk93@gmail.com',
                href: 'mailto:tetianapanasiuk93@gmail.com',
              },
              {
                icon: faLinkedin,
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tetiana-panasiuk/',
              },
              {
                icon: faGithub,
                label: 'GitHub',
                href: 'https://github.com/tpanasiuk',
              },
              {
                icon: faInstagram,
                label: 'Instagram',
                href: 'https://www.instagram.com/tetiana_panasiuk/',
              },
              {
                icon: faMapMarkerAlt,
                label: 'Cracow, Poland',
              },
            ].map((item, index) => (
              <li key={index} style={{ '--i': index }}>
                <FontAwesomeIcon icon={item.icon} />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-details__resume-button"
          >
            View full resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
