import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Contact from '../components/sections/Contact'

describe('Contact', () => {
  it('renders contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('updates form fields on input', () => {
    render(<Contact />)
    const nameInput = screen.getByLabelText(/Name/i)
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    expect(nameInput.value).toBe('John Doe')
  })

  it('shows success message after form submission', async () => {
    render(<Contact />)
    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } })
    
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('displays contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/contact@example.com/i)).toBeInTheDocument()
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument()
  })
})
