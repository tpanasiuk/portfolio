import React, { useState } from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Footer.scss'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (isValidEmail) {
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
                <Link to="/" className="footer__menu-link">About me</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/experience" className="footer__menu-link">Experience</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/widgets" className="footer__menu-link">Widgets</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/contact" className="footer__menu-link">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__newsletter">
            <form className="footer__newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter signup form">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="footer__newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true"
                required
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__social" aria-label="Social media links">
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
            href="https://www.facebook.com/tanya.panasyuk.18/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Facebook"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
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
