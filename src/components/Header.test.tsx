import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the title', () => {
    render(<Header title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the subtitle when provided', () => {
    render(<Header title="Test Title" subtitle="Test Subtitle" />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('does not render subtitle when not provided', () => {
    render(<Header title="Test Title" />)
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument()
  })

  // --- Failing tests: these assert unimplemented features ---

  it('applies a custom className to the header element', () => {
    const { container } = render(
      // @ts-expect-error className prop is not yet implemented
      <Header title="Test Title" className="custom-header" />
    )
    expect(container.querySelector('header')).toHaveClass('custom-header')
  })

  it('renders a back button when showBackButton prop is true', () => {
    // @ts-expect-error showBackButton prop is not yet implemented
    render(<Header title="Test Title" showBackButton />)
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('renders children inside the header', () => {
    render(
      // @ts-expect-error children prop is not yet implemented
      <Header title="Test Title">
        <nav data-testid="header-nav">Navigation</nav>
      </Header>
    )
    expect(screen.getByTestId('header-nav')).toBeInTheDocument()
  })
})
