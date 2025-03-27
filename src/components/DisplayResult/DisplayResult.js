import React from 'react'
import './DisplayResult.scss'

const DisplayResult = () => {
  return (
    <section className="display-result">
      <div className="display-result__content">
        <h2 className="display-result__title">About Me</h2>
        <p className="display-result__text">
          I am a Frontend Developer with over 4 years of commercial experience, specializing in
          building responsive, accessible, and user-focused websites and applications.
          <br />
          I bring designs to life using modern technologies such as React, TypeScript, and SCSS
          while following a mobile-first approach and accessibility guidelines.
          <br />
          My work is guided by clean code practices, performance optimization, and a passion for
          delivering pixel-perfect experiences.
        </p>
      </div>
    </section>
  )
}

export default DisplayResult
