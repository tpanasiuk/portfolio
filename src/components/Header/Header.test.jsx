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

    expect(screen.getByRole('link', { name: /About me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Widgets/i })).toBeInTheDocument()
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

    const mobileLink = screen.getByRole('link', { name: /Experience/i })
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

  it('scrolls to top when logo is clicked on homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    const logoLink = screen.getByRole('link', { name: /logo/i })

    fireEvent.click(logoLink)

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
