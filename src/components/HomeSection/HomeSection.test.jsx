import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './HomeSection'
import '@testing-library/jest-dom'

jest.mock('swiper/react')
jest.mock('swiper/modules')

jest.mock('../../assets/img/1920x1080/01.webp', () => 'img1.jpg')
jest.mock('../../assets/img/1920x1080/02.webp', () => 'img2.jpg')
jest.mock('../../assets/img/1920x1080/03.webp', () => 'img3.jpg')
jest.mock('../../assets/img/1920x1080/04.webp', () => 'img4.jpg')
jest.mock('../../assets/img/1920x1080/05.webp', () => 'img5.jpg')

describe('Home component', () => {
  it('renders swiper with 5 slides', () => {
    render(<Home />)
    const slides = screen.getAllByTestId('swiper-slide')
    expect(slides).toHaveLength(5)
  })

  it('renders heading and summary text', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /digital product agency/i })).toBeInTheDocument()
    expect(screen.getByText(/look no further/i)).toBeInTheDocument()
  })
})
