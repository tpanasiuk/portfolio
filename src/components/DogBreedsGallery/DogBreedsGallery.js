import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import { CircularProgress } from '@mui/material'

import './DogBreedsGallery.scss'

const DogBreedsGallery = () => {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'x-api-key': process.env.REACT_APP_DOG_API_KEY,
          },
        })
        const data = await res.json()
        setBreeds(data.filter((breed) => breed.image?.url))
      } catch (error) {
        console.error('Failed to fetch dog breeds:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBreeds()
  }, [])

  return (
    <section className="breeds">
      <h2 className={`breeds__heading ${loaded ? 'is-visible' : ''}`}>
        Dog Breeds Carousel (REST call from api.thedogapi.com)
      </h2>

      {loading ? (
        <div className="breeds__loader">
          <CircularProgress className="breeds__spinner"/>
        </div>
      ) : (
        <Swiper
          effect="cards"
          slidesPerView={1}
          loop={true}
          cardsEffect={{
            perSlideOffset: 20,
            perSlideRotate: 0,
            rotate: true,
            slideShadows: false,
          }}
          modules={[EffectCards, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="breeds__carousel"
        >
          {breeds.map((breed) => (
            <SwiperSlide key={breed.id}>
              <div className="breeds__card">
                <img
                  className={`breeds__image ${loaded ? 'breeds__image--visible' : ''}`}
                  src={breed.image.url}
                  alt={breed.name}
                  onLoad={() => setLoaded(true)}
                />
                <div className="breeds__content">
                  <h3 className="breeds__name">{breed.name}</h3>
                  <p className="breeds__info">
                    <span className="breeds__label">Group:</span> {breed.breed_group || 'N/A'}
                  </p>
                  <p className="breeds__info">
                    <span className="breeds__label">Life Span:</span> {breed.life_span}
                  </p>
                  <p className="breeds__info">
                    <span className="breeds__label">Temperament:</span> {breed.temperament}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  )
}

export default DogBreedsGallery
