import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import './HomeSection.scss'

import img1 from '../../assets/img/1920x1080/01.webp'
import img2 from '../../assets/img/1920x1080/02.webp'
import img3 from '../../assets/img/1920x1080/03.webp'
import img4 from '../../assets/img/1920x1080/04.webp'
import img5 from '../../assets/img/1920x1080/05.webp'

const images = [img1, img2, img3, img4, img5]

const Home = () => {
  return (
    <section className="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="home__swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="home__image" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home__overlay"></div>
      <div className="home__content">
        <h1 className="home__content-title">Tetiana Panasiuk</h1>
        <p className="home__content-summary">Frontend Developer</p>
      </div>
    </section>
  )
}

export default Home
