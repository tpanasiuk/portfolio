import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

import './CarouselVideo.scss'
import videoThumb1 from '../../assets/img/vertical/1.jpg'
import videoThumb2 from '../../assets/img/vertical/2.jpg'
import videoThumb3 from '../../assets/img/vertical/3.jpg'
import videoThumb4 from '../../assets/img/vertical/4.jpg'
import videoThumb5 from '../../assets/img/vertical/5.jpg'

const cards = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/LRApJG5WdIg',
    image: videoThumb1,
    name: 'Måneskin',
    position: 'Rush',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/4vRGUzYRGaQ',
    image: videoThumb2,
    name: 'Latexfauna',
    position: 'Senbernar',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/DlCGst1XmcE',
    image: videoThumb3,
    name: 'BoomBox',
    position: 'All albums',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/j3qRuxTyA-E',
    image: videoThumb4,
    name: 'Skryabin',
    position: 'All albums',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/8scL5oJX6CM',
    image: videoThumb5,
    name: 'Cigarettes after S',
    position: 'All albums',
  },
]

const VideoCarousel = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setHasLoaded(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  const [open, setOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleOpen = (videoUrl) => {
    setSelectedVideo(videoUrl)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <section className={`video-carousel ${hasLoaded ? 'fade-in' : ''}`}>
      <div className="video-carousel__container">
        <div className="video-carousel__header">
          <h2 className="video-carousel__heading">Favourite music for coding</h2>
          <p className="video-carousel__summary">Enjoy my favourite music with me</p>
        </div>

        <div className="video-carousel__carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              990: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="video-carousel__card">
                <div className="video-carousel__media">
                  <button
                    className="video-carousel__play-button"
                    type="button"
                    aria-label="Play video"
                    onClick={() => handleOpen(card.videoUrl)}
                  ></button>
                  <img
                    className="video-carousel__image"
                    src={card.image}
                    loading="lazy"
                    alt={`Video card featuring ${card.name}`}
                  />
                </div>
                <div className="video-carousel__content">
                  <p className="video-carousel__name">{card.name}</p>
                  <p className="video-carousel__position">{card.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        closeAfterTransition={false}
        maxWidth="md"
        fullWidth
        className="video-carousel__dialog"
        disableScrollLock
      >
        <IconButton
          className="video-carousel__dialog-close"
          onClick={handleClose}
          aria-label="Close video"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className="video-carousel__dialog-content">
          <iframe
            width="100%"
            height="400px"
            src={selectedVideo}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default VideoCarousel
