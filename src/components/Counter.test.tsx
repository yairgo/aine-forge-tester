import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('renders with initial value of 0 by default', () => {
    render(<Counter />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })

  it('renders with custom initial value', () => {
    render(<Counter initialValue={10} />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  it('increments the count when + button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByLabelText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
  })

  it('decrements the count when − button is clicked', () => {
    render(<Counter />)
    const decrementButton = screen.getByLabelText('Decrement')
    fireEvent.click(decrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1')
  })

  it('resets to initial value when Reset button is clicked', () => {
    render(<Counter initialValue={5} />)
    const incrementButton = screen.getByLabelText('Increment')
    const resetButton = screen.getByLabelText('Reset')

    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('7')

    fireEvent.click(resetButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
  })

  it('uses custom step value', () => {
    render(<Counter step={5} />)
    const incrementButton = screen.getByLabelText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5')
  })

  // --- Failing tests: unimplemented features (marked with it.fails) ---

  it.fails('does not exceed max value when max prop is provided', () => {
    // @ts-expect-error max prop is not yet implemented
    render(<Counter initialValue={9} max={10} />)
    const incrementButton = screen.getByLabelText('Increment')
    fireEvent.click(incrementButton) // reaches 10
    fireEvent.click(incrementButton) // should be capped at 10
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  it.fails('disables the increment button when count equals max', () => {
    // @ts-expect-error max prop is not yet implemented
    render(<Counter initialValue={10} max={10} />)
    const incrementButton = screen.getByLabelText('Increment')
    expect(incrementButton).toBeDisabled()
  })

  it.fails('does not go below min value when min prop is provided', () => {
    // @ts-expect-error min prop is not yet implemented
    render(<Counter initialValue={1} min={0} />)
    const decrementButton = screen.getByLabelText('Decrement')
    fireEvent.click(decrementButton) // reaches 0
    fireEvent.click(decrementButton) // should be capped at 0
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })
})
