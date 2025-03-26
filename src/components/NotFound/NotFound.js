import React from 'react'
import './NotFound.scss'

import img2 from '../../assets/img/1920x1080/02.webp'

const Home = () => {
  return (
    <section className="home-content">
      <img className="home-content__image" src={img2} alt="field with wheat" loading="lazy" />

      <div className="home-content__overlay"></div>

      <div className="home-content__content-inner">
        <h1 className="home-content__content-title">This page is under development</h1>
      </div>
    </section>
  )
}

export default Home
