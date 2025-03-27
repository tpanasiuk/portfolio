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

jest.mock('react-countup', () => ({ end, suffix }) => <span>{`${end}${suffix}`}</span>)

describe('Statistics component', () => {
  it('renders heading', () => {
    render(<Statistics />)
    expect(screen.getByRole('heading', { name: /my experience in numbers/i })).toBeInTheDocument()
  })

  it('renders all statistic items', () => {
    render(<Statistics />)
    const labels = [
      'Years of commercial frontend development experience',
      'Frontend technologies mastered including JavaScript, React, TypeScript, SCSS, and more',
      'Companies where I delivered high-quality production code',
      'Career websites and branding tools developed',
    ]
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('renders correct numbers when in view', () => {
    render(<Statistics />)
    expect(screen.getByText('4+')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('40+')).toBeInTheDocument()
  })
})
