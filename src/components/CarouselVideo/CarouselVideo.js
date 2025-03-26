import React, { useState } from 'react'
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
import videoThumb6 from '../../assets/img/vertical/6.jpg'

const cards = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb1,
    text: 'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
    name: 'Anthony Bahringer',
    position: 'Senior Research Manager',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb2,
    text: 'Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at.',
    name: 'Jane Doe',
    position: 'Lead Engineer',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb3,
    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    name: 'John Smith',
    position: 'Marketing Director',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb4,
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    name: 'Emma Wilson',
    position: 'Software Developer',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb5,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Michael Brown',
    position: 'Product Manager',
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/embed/xAR6N9N8e6U?si=zfmtk2UGEbG5kdBh',
    image: videoThumb6,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Sophia Martinez',
    position: 'UX Designer',
  },
]

const VideoCarousel = () => {
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
    <section className="video-carousel">
      <div className="video-carousel__container">
        <div className="video-carousel__header">
          <h2 className="video-carousel__heading">Video Carousel</h2>
          <p className="video-carousel__summary">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
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
                  <p className="video-carousel__text">{card.text}</p>
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
