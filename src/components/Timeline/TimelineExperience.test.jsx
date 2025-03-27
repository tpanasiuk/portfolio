import React from 'react'
import { render, screen } from '@testing-library/react'
import Timeline from './Timeline'

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback
    }
    observe = (element) => {
      // Simulate intersection
      this.callback([{ isIntersecting: true, target: element }])
    }
    unobserve = () => {}
    disconnect = () => {}
  }
})

describe('Timeline Component', () => {
  it('renders heading', () => {
    render(<Timeline />)
    const heading = screen.getByRole('heading', { name: /my experience/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders all experience items', () => {
    render(<Timeline />)
    const titles = [
      'Web Developer',
      'Software Engineer',
      'Associate Software Engineer',
      'Junior Front Office Developer',
      'Customer Service Representative',
    ]

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('adds is-visible class to items via IntersectionObserver', () => {
    const { container } = render(<Timeline />)
    const items = container.querySelectorAll('.timeline__item')
    items.forEach((item) => {
      expect(item.classList.contains('is-visible')).toBe(true)
    })
  })
})
