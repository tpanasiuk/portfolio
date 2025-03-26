import React from 'react'
import './HomeSectionContentPages.scss'

import img5 from '../../assets/img/1920x1080/05.webp'

const Home = () => {
  return (
    <section className="home-content">
      <img className="home-content__image" src={img5} alt="field with wheat" loading="lazy" />

      <div className="home-content__overlay"></div>

      <div className="home-content__content-inner">
        <h1 className="home-content__content-title">Just some nice widgets to show off</h1>
      </div>
    </section>
  )
}

export default Home
