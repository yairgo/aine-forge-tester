import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator Component', () => {
  it('renders the calculator with title and inputs', () => {
    render(<Calculator />)
    expect(screen.getByText('Simple Calculator')).toBeInTheDocument()
    expect(screen.getByTestId('first-number-input')).toBeInTheDocument()
    expect(screen.getByTestId('second-number-input')).toBeInTheDocument()
  })

  it('renders Add and Reset buttons', () => {
    render(<Calculator />)
    expect(screen.getByTestId('add-button')).toBeInTheDocument()
    expect(screen.getByTestId('reset-button')).toBeInTheDocument()
  })

  it('adds two numbers correctly', () => {
    render(<Calculator />)
    const firstInput = screen.getByTestId('first-number-input') as HTMLInputElement
    const secondInput = screen.getByTestId('second-number-input') as HTMLInputElement
    const addButton = screen.getByTestId('add-button')

    fireEvent.change(firstInput, { target: { value: '5' } })
    fireEvent.change(secondInput, { target: { value: '3' } })
    fireEvent.click(addButton)

    expect(screen.getByTestId('result-value')).toHaveTextContent('8')
  })

  it('handles decimal numbers', () => {
    render(<Calculator />)
    const firstInput = screen.getByTestId('first-number-input') as HTMLInputElement
    const secondInput = screen.getByTestId('second-number-input') as HTMLInputElement
    const addButton = screen.getByTestId('add-button')

    fireEvent.change(firstInput, { target: { value: '2.5' } })
    fireEvent.change(secondInput, { target: { value: '1.5' } })
    fireEvent.click(addButton)

    expect(screen.getByTestId('result-value')).toHaveTextContent('4')
  })

  it('resets the calculator', () => {
    render(<Calculator />)
    const firstInput = screen.getByTestId('first-number-input') as HTMLInputElement
    const secondInput = screen.getByTestId('second-number-input') as HTMLInputElement
    const addButton = screen.getByTestId('add-button')
    const resetButton = screen.getByTestId('reset-button')

    fireEvent.change(firstInput, { target: { value: '5' } })
    fireEvent.change(secondInput, { target: { value: '3' } })
    fireEvent.click(addButton)

    expect(screen.getByTestId('result-value')).toBeInTheDocument()

    fireEvent.click(resetButton)

    expect(firstInput.value).toBe('')
    expect(secondInput.value).toBe('')
    expect(screen.queryByTestId('result-value')).not.toBeInTheDocument()
  })

  it('does not show result initially', () => {
    render(<Calculator />)
    expect(screen.queryByTestId('result-value')).not.toBeInTheDocument()
  })
})

