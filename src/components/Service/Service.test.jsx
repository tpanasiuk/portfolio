import React from 'react'
import { render, screen } from '@testing-library/react'
import Service from './Service'
import '@testing-library/jest-dom'

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(callback, options) {
      this.callback = callback
      this.options = options
    }
    observe = jest.fn()
    unobserve = jest.fn()
    disconnect = jest.fn()
  }
})

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <svg data-testid={`icon-${icon.iconName}`} className={className} />
  ),
}))

describe('Service component', () => {
  it('renders the section heading', () => {
    render(<Service />)
    expect(screen.getByRole('heading', { name: /my frontend expertise/i })).toBeInTheDocument()
  })

  it('renders all six service items with correct titles and texts', () => {
    render(<Service />)

    const titles = [
      'Clean & Accessible Code',
      'Responsive Design',
      'Design Implementation',
      'Reusable Components',
      'Efficient Delivery',
      'API Integration',
    ]

    titles.forEach((title) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    })

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(6)

    items.forEach((item) => {
      expect(item).toBeVisible()
      expect(item).toHaveAttribute('tabindex', '0')
    })
  })

  it('renders icons for each service', () => {
    render(<Service />)

    const iconNames = ['flask', 'tablet-screen-button', 'medal', 'note-sticky', 'clock', 'plug']
    iconNames.forEach((name) => {
      expect(screen.getByTestId(`icon-${name}`)).toBeInTheDocument()
    })
  })
})
