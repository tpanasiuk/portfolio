import React from 'react'
import HomeSectionContentPages from '../components/HomeSectionContentPages/HomeSectionContentPages'
import DogBreedsGallery from '../components/DogBreedsGallery/DogBreedsGallery'
import CarouselVideo from '../components/CarouselVideo/CarouselVideo'
import Img from '../assets/img/1920x1080/02.webp'

const Widgets = () => {
  return (
    <>
      <HomeSectionContentPages title="Just some nice widgets to show off" image={Img} />
      <CarouselVideo />
      <DogBreedsGallery />
    </>
  )
}

export default Widgets
