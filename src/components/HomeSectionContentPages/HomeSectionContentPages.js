import React from 'react'
import './HomeSectionContentPages.scss'

import img5 from '../../assets/img/1920x1080/05.webp'

const Home = () => {
  return (
    <section className="home-content">
      <img
        className="home-content__image"
        src={img5}
        alt="Digital Product Agency"
        loading="lazy"
      />

      <div className="home-content__overlay"></div>

      <div className="home-content__content-inner">
        <h1 className="home-content__content-title">Digital Product Agency.</h1>
        <p className="home-content__content-summary">
          Look no further. You came to the right ... place
        </p>
      </div>
    </section>
  )
}

export default Home
