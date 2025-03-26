import React from 'react'
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import DogBreedsGallery from './DogBreedsGallery'
import '@testing-library/jest-dom'

jest.mock('swiper/react')
jest.mock('swiper/modules')
jest.mock('./DogBreedsGallery.scss', () => ({}))

const mockBreedData = [
  {
    id: 1,
    name: 'Bernese Mountain Dog',
    breed_group: 'Working',
    life_span: '7 - 10 years',
    temperament: 'Friendly, Calm, Strong',
    image: { url: 'https://example.com/image.jpg' },
  },
]

beforeEach(() => {
  global.fetch = jest.fn(() =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          json: () => Promise.resolve(mockBreedData),
        })
      }, 10)
    })
  )
})


afterEach(() => {
  jest.resetAllMocks()
})

describe('DogBreedsGallery', () => {
  it('renders loading spinner initially', async () => {
    render(<DogBreedsGallery />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })
  })

  it('renders heading and breed cards after data loads', async () => {
    await act(async () => {
      render(<DogBreedsGallery />)
    })

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    )

    expect(screen.getByRole('heading', { name: /Dog Breeds Carousel/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('swiper-slide')).toHaveLength(1)
    expect(screen.getByText(/Bernese Mountain Dog/i)).toBeInTheDocument()
  })

  it('sets image as loaded when it triggers onLoad', async () => {
    await act(async () => {
      render(<DogBreedsGallery />)
    })

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    )

    const image = screen.getByRole('img', { name: /Bernese Mountain Dog/i })
    expect(image).toBeInTheDocument()

    fireEvent.load(image)
    expect(image.classList.contains('breeds__image--visible')).toBe(true)
  })
})
