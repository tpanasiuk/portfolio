import React from 'react'
import './HomeSectionContentPages.scss'

import defaultImg from '../../assets/img/1920x1080/07.jpg'

const HomeSectionContentPages = ({ title = 'Tetiana Panasiuk', image = defaultImg }) => {
  return (
    <section className="home-content">
      <img className="home-content__image" src={image} alt="mountains" loading="lazy" />

      <div className="home-content__overlay"></div>

      <div className="home-content__content-inner">
        <h1 className="home-content__content-title">{title}</h1>
      </div>
    </section>
  )
}

export default HomeSectionContentPages
