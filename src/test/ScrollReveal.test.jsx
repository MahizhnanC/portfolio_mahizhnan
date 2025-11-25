import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ScrollReveal from '../components/effects/ScrollReveal'

describe('ScrollReveal', () => {
  it('renders children', () => {
    render(
      <ScrollReveal>
        <div>Test Content</div>
      </ScrollReveal>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies initial hidden state', () => {
    const { container } = render(
      <ScrollReveal>
        <div>Test Content</div>
      </ScrollReveal>
    )
    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('opacity-0')
  })
})
