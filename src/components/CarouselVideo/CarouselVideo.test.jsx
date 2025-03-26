import React from 'react'
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import VideoCarousel from './CarouselVideo'
import '@testing-library/jest-dom'

jest.mock('swiper/react')
jest.mock('swiper/modules')

jest.mock('../../assets/img/vertical/1.jpg', () => 'img1.jpg')
jest.mock('../../assets/img/vertical/2.jpg', () => 'img2.jpg')
jest.mock('../../assets/img/vertical/3.jpg', () => 'img3.jpg')
jest.mock('../../assets/img/vertical/4.jpg', () => 'img4.jpg')
jest.mock('../../assets/img/vertical/5.jpg', () => 'img5.jpg')
jest.mock('../../assets/img/vertical/6.jpg', () => 'img6.jpg')

beforeEach(() => {
  window.IntersectionObserver = class {
    constructor(cb) {
      this.cb = cb
    }

    observe = jest.fn()
    unobserve = jest.fn()
    disconnect = jest.fn()
  }
})


describe('VideoCarousel component', () => {
  it('renders the section heading', () => {
    render(<VideoCarousel />)
    expect(screen.getByRole('heading', { name: /Our Stories/i })).toBeInTheDocument()
  })

  it('renders all video cards', () => {
    render(<VideoCarousel />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('opens modal when play button is clicked', () => {
    render(<VideoCarousel />)
    const playButtons = screen.getAllByRole('button', { name: /play video/i })
    fireEvent.click(playButtons[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByTitle('Video')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    render(<VideoCarousel />)

    const playButtons = screen.getAllByRole('button', { name: /play video/i })
    fireEvent.click(playButtons[0])

    const closeButton = screen.getByRole('button', { name: /close video/i })
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => screen.queryByTitle('Video'))
  })
})
