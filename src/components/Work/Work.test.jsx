import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Work from './Work'
import '@testing-library/jest-dom'
import { waitForElementToBeRemoved } from '@testing-library/react'

// Mock images
jest.mock('../../assets/img/800x400/01.jpg', () => 'img1.jpg')
jest.mock('../../assets/img/397x400/01.jpg', () => 'img2.jpg')
jest.mock('../../assets/img/397x300/01.jpg', () => 'img3.jpg')
jest.mock('../../assets/img/397x300/02.jpg', () => 'img4.jpg')
jest.mock('../../assets/img/397x300/03.jpg', () => 'img5.jpg')

describe('Work component', () => {
  it('renders all work items', () => {
    render(<Work />)
    const items = screen.getAllByRole('button')
    expect(items.length).toBe(5)
  })

  it('opens dialog with correct content on click', () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Art of Coding/i })
    fireEvent.click(item)

    expect(screen.getByText('Art of Coding')).toBeInTheDocument()
    expect(screen.getByText('Clean & Minimalistic Design')).toBeInTheDocument()
    expect(screen.getByText(/Project Leader/i)).toBeInTheDocument()
  })

  it('closes dialog on close button click', async () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Art of Coding/i })
    fireEvent.click(item)

    const closeButton = screen.getByRole('button', { name: /close/i }) || screen.getByRole('button')
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => screen.queryByText('Art of Coding'))
  })

  it('opens dialog on Enter key press', () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Modern Architecture/i })
    item.focus()
    fireEvent.keyDown(item, { key: 'Enter', code: 'Enter' })

    expect(screen.getByText('Modern Architecture')).toBeInTheDocument()
  })

  it('opens dialog on Space key press', () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Interior Design/i })
    item.focus()
    fireEvent.keyDown(item, { key: ' ', code: 'Space' })

    expect(screen.getByText('Interior Design')).toBeInTheDocument()
  })
})
