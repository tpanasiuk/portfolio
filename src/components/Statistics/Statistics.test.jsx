import React from 'react'
import { render, screen } from '@testing-library/react'
import Statistics from './Statistics'
import '@testing-library/jest-dom'

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({
    ref: jest.fn(),
    inView: true,
  }),
}))

jest.mock('react-countup', () => ({ end }) => <span>{end}</span>)

describe('Statistics component', () => {
  it('renders heading', () => {
    render(<Statistics />)
    expect(screen.getByRole('heading', { name: /our company in numbers/i })).toBeInTheDocument()
  })

  it('renders all statistic items', () => {
    render(<Statistics />)
    const statItems = screen.getAllByText(
      /Dedicated employees|global community|Award-winning|updates and improvements/i
    )
    expect(statItems).toHaveLength(4)
  })

  it('renders correct numbers when in view', () => {
    render(<Statistics />)
    expect(screen.getByText('1000')).toBeInTheDocument()
    expect(screen.getByText('380')).toBeInTheDocument()
    expect(screen.getByText('114')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
  })
})
