import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Footer.scss'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  useEffect(() => {
    if (email === '') {
      setIsEmailValid(true) // neutral state
    } else {
      setIsEmailValid(validateEmail(email))
    }
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      toast.success('You have successfully signed up!')
      setEmail('')
    } else {
      toast.error('Please enter a valid email address.')
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
        className="toast-container"
        toastClassName="toast-message"
      />

      <div className="footer__container">
        <div className="footer__top">
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="/" className="footer__menu-link">
                  About me
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/experience" className="footer__menu-link">
                  Experience
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/widgets" className="footer__menu-link">
                  Widgets
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/contact" className="footer__menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer__newsletter">
            <form
              className="footer__newsletter-form"
              onSubmit={handleSubmit}
              aria-label="Newsletter signup form"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className={`footer__newsletter-input ${isEmailValid ? '' : 'footer__newsletter-input--error'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!isEmailValid}
                required
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
              {!isEmailValid && (
                <p className="footer__newsletter-error">
                  Invalid email address (e.g. example@mail.com)
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="footer__social" aria-label="Contact and social links">
          <a
            href="https://www.linkedin.com/in/tetiana-panasiuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:tetianapanasiuk93@gmail.com"
            className="footer__social-link"
            aria-label="Email"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/tpanasiuk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/tetiana_panasiuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} Tetiana Panasiuk. Frontend Developer.
        </div>
      </div>
    </footer>
  )
}

export default Footer
