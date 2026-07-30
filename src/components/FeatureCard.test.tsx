import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FeatureCard from './FeatureCard'

describe('FeatureCard', () => {
  it('renders the title', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('🚀')).toBeInTheDocument()
  })

  // --- Failing tests: these assert unimplemented features ---

  it('renders a link when href prop is provided', () => {
    render(
      // @ts-expect-error href prop is not yet implemented
      <FeatureCard title="Test Feature" description="Test description" icon="🚀" href="https://example.com" />
    )
    const link = screen.getByRole('link', { name: /test feature/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('applies a custom className when provided', () => {
    const { container } = render(
      // @ts-expect-error className prop is not yet implemented
      <FeatureCard title="Test Feature" description="Test description" icon="🚀" className="highlight" />
    )
    expect(container.firstChild).toHaveClass('highlight')
  })

  it('renders a badge when badge prop is provided', () => {
    render(
      // @ts-expect-error badge prop is not yet implemented
      <FeatureCard title="Test Feature" description="Test description" icon="🚀" badge="New" />
    )
    expect(screen.getByText('New')).toBeInTheDocument()
  })
})
