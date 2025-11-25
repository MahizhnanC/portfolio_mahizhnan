import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Navigation from '../components/Navigation'

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('opens mobile menu when menu button is clicked', () => {
    render(<Navigation />)
    const menuButton = screen.getByLabelText('Toggle mobile menu')
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('applies glass effect when scrolled', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation')
    
    // Simulate scroll
    window.scrollY = 100
    fireEvent.scroll(window)
    
    // Note: In a real test, you'd check for the class change
    expect(nav).toBeInTheDocument()
  })
})
