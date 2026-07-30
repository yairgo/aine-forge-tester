import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(e.target.value)
  }

  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(e.target.value)
  }

  const handleAdd = () => {
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber)

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers')
      return
    }

    setResult(num1 + num2)
  }

  const handleReset = () => {
    setFirstNumber('')
    setSecondNumber('')
    setResult(null)
  }

  return (
    <div className="calculator">
      <h2 className="calculator-title">Simple Calculator</h2>
      
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="first-number">First Number:</label>
          <input
            id="first-number"
            type="number"
            value={firstNumber}
            onChange={handleFirstNumberChange}
            placeholder="Enter first number"
            data-testid="first-number-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="second-number">Second Number:</label>
          <input
            id="second-number"
            type="number"
            value={secondNumber}
            onChange={handleSecondNumberChange}
            placeholder="Enter second number"
            data-testid="second-number-input"
          />
        </div>
      </div>

      <div className="calculator-controls">
        <button
          onClick={handleAdd}
          className="calculator-button add"
          aria-label="Add numbers"
          data-testid="add-button"
        >
          Add
        </button>
        <button
          onClick={handleReset}
          className="calculator-button reset"
          aria-label="Reset calculator"
          data-testid="reset-button"
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="calculator-result">
          <span className="result-label">Result:</span>
          <span className="result-value" data-testid="result-value">
            {result}
          </span>
        </div>
      )}
    </div>
  )
}

export default Calculator

