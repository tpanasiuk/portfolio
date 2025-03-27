import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Work from './Work'
import '@testing-library/jest-dom'
import { waitForElementToBeRemoved } from '@testing-library/react'

jest.mock('../../assets/img/work/1.png', () => 'img1.png')
jest.mock('../../assets/img/work/2.png', () => 'img2.png')
jest.mock('../../assets/img/work/3.jpg', () => 'img3.jpg')
jest.mock('../../assets/img/work/4.png', () => 'img4.png')
jest.mock('../../assets/img/work/5.png', () => 'img5.png')

jest.mock('../../hooks/useScrollFadeIn', () => () => ({
  ref: jest.fn(),
  isVisible: true,
}))

describe('Work component', () => {
  it('renders all work items', () => {
    render(<Work />)
    const items = screen.getAllByRole('button')
    expect(items.length).toBe(5)
  })

  it('opens dialog with correct content on click', () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Web Developer/i })
    fireEvent.click(item)

    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText(/SmartRecruiters/i)).toBeInTheDocument()
    expect(screen.getByText(/Creating and optimizing web components/i)).toBeInTheDocument()
  })

  it('closes dialog on close button click', async () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Web Developer/i })
    fireEvent.click(item)

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => screen.queryByText('Web Developer'))
  })

  it('opens dialog on Enter key press', () => {
    render(<Work />)
    const item = screen.getByRole('button', { name: /open details for Software Engineer/i })
    item.focus()
    fireEvent.keyDown(item, { key: 'Enter', code: 'Enter' })

    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText(/Cornerstone OnDemand/i)).toBeInTheDocument()
  })

  it('opens dialog on Space key press', () => {
    render(<Work />)
    const item = screen.getByRole('button', {
      name: /open details for Associate Software Engineer/i,
    })
    item.focus()
    fireEvent.keyDown(item, { key: ' ', code: 'Space' })

    expect(screen.getByText('Associate Software Engineer')).toBeInTheDocument()
    expect(screen.getByText(/Created branded web components/i)).toBeInTheDocument()
  })
})
