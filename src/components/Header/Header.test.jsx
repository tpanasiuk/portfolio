import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Header from './Header'
import '@testing-library/jest-dom'
import { act } from 'react'

beforeAll(() => {
  window.scrollTo = jest.fn()
})

describe('Header component', () => {
  it('renders all desktop navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Products/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('opens and closes mobile drawer when toggle is clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    fireEvent.click(toggleButton)

    expect(screen.getByRole('presentation')).toBeInTheDocument()

    const mobileLink = screen.getByRole('link', { name: /Products/i })
    fireEvent.click(mobileLink)

  })

  it('adds scrolled class on scroll', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })

    const appBar = screen.getByRole('banner')
    expect(appBar.className).toMatch(/header--scrolled/)
  })
})
