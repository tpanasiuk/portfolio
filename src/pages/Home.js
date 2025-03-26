import React from 'react'
import HomeSection from '../components/HomeSection/HomeSection'
import CarouselVideo from '../components/CarouselVideo/CarouselVideo'
import DisplayResult from '../components/DisplayResult/DisplayResult'
import Service from '../components/Service/Service'
import Work from '../components/Work/Work'
import Statistics from '../components/Statistics/Statistics'

const Home = () => {
  return (
    <>
      <HomeSection />
      <CarouselVideo />
      <DisplayResult />
      <Statistics />
      <Service />
      <Work />
    </>
  )
}

export default Home
