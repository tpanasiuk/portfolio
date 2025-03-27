import React from 'react'

export const Swiper = ({ children }) => (
  <div data-testid="swiper">
    {children}
  </div>
)

export const SwiperSlide = ({ children }) => (
  <div data-testid="swiper-slide">
    {children}
  </div>
)
