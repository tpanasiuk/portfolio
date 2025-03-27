import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeSectionContentPages from './HomeSectionContentPages'
import '@testing-library/jest-dom'

jest.mock('../../assets/img/1920x1080/07.jpg', () => 'mocked-default-image.jpg')

describe('HomeSectionContentPages component', () => {
  it('renders default image and title when no props are passed', () => {
    render(<HomeSectionContentPages />)

    const image = screen.getByAltText('mountains')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'mocked-default-image.jpg')

    const heading = screen.getByRole('heading', { name: /Tetiana Panasiuk/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders provided title and image props', () => {
    render(<HomeSectionContentPages title="Custom Page Heading" image="custom-image.jpg" />)

    const image = screen.getByAltText('mountains')
    expect(image).toHaveAttribute('src', 'custom-image.jpg')

    const heading = screen.getByRole('heading', { name: /Custom Page Heading/i })
    expect(heading).toBeInTheDocument()
  })
})
