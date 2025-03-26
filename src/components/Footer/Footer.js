import React, { useState } from 'react'
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
    <footer className="footer">
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
          <nav className="footer__nav">
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="/" className="footer__menu-link">Home</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/products" className="footer__menu-link">Products</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/services" className="footer__menu-link">Services</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/pricing" className="footer__menu-link">Pricing</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/contact" className="footer__menu-link">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__links">
            <Link to="/privacy" className="footer__link">Privacy Policy</Link>
            <Link to="/terms" className="footer__link">Terms & Conditions</Link>
          </div>

          <div className="footer__newsletter">
            <p className="footer__newsletter-text">Subscribe to our newsletter</p>
            <form className="footer__newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} Aironpage. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
