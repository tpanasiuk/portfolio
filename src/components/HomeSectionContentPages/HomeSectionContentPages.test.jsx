import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './HomeSectionContentPages'
import '@testing-library/jest-dom'

jest.mock('../../assets/img/1920x1080/05.webp', () => 'mocked-image.webp')

describe('HomeSectionContentPages component', () => {
  it('renders image, heading, and summary paragraph', () => {
    render(<Home />)

    const image = screen.getByAltText('Digital Product Agency')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'mocked-image.webp')

    const heading = screen.getByRole('heading', { name: /Digital Product Agency/i })
    expect(heading).toBeInTheDocument()

    const paragraph = screen.getByText(/You came to the right ... place/i)
    expect(paragraph).toBeInTheDocument()
  })
})
