import React from 'react'
import { render, screen } from '@testing-library/react'
import DisplayResult from './DisplayResult'

describe('DisplayResult component', () => {
  it('renders the title and paragraph', () => {
    render(<DisplayResult />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me')

    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument()
  })
})
