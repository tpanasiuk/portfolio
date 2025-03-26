import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Footer from './Footer'
import '@testing-library/jest-dom'

jest.mock('react-toastify', () => {
  const original = jest.requireActual('react-toastify')
  return {
    ...original,
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
    ToastContainer: () => <div data-testid="toast-container" />,
  }
})

describe('Footer component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders footer links and social icons', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/products/i)).toBeInTheDocument()
    expect(screen.getByText(/services/i)).toBeInTheDocument()
    expect(screen.getByText(/pricing/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument()
    expect(screen.getByText(/terms & conditions/i)).toBeInTheDocument()
  })

  it('submits valid email and shows success toast', () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    fireEvent.change(getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    })

    fireEvent.click(getByRole('button', { name: /subscribe/i }))

    expect(require('react-toastify').toast.success).toHaveBeenCalledWith(
      'You have successfully signed up!'
    )
  })

  it('shows error toast for invalid email', () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    fireEvent.change(getByLabelText(/email address/i), {
      target: { value: 'invalid-email' },
    })

    fireEvent.click(getByRole('button', { name: /subscribe/i }))

    expect(require('react-toastify').toast.error).toHaveBeenCalledWith(
      'Please enter a valid email address.'
    )
  })
})
