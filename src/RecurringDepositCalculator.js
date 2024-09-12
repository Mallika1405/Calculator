import React, { useState } from 'react';
import './RecurringDepositCalculator.css';

function RecurringDepositCalculator() {
  const [deposit, setDeposit] = useState(10000);
  const [rate, setRate] = useState(6);
  const [months, setMonths] = useState(60);
  const [frequency, setFrequency] = useState(12);
  const [result, setResult] = useState({ total: 0, interest: 0 });

  const handleDepositChange = (e) => {
    setDeposit(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleMonthsChange = (e) => {
    setMonths(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const calculateRecurringDeposit = (e) => {
    e.preventDefault();
    const monthlyDeposit = parseFloat(deposit);
    const annualRate = parseFloat(rate) / 100;
    const timeInMonths = parseFloat(months);
    const timeInYears = timeInMonths / 12; // Convert months to years
    const compoundFrequency = parseInt(frequency);

    // Correct RD Maturity Calculation using the correct RD formula
    const maturityAmount =
      monthlyDeposit *
      ((Math.pow(1 + annualRate / compoundFrequency, compoundFrequency * timeInYears) - 1) /
        (1 - Math.pow(1 + annualRate / compoundFrequency, -1 / compoundFrequency))) *
      (1 + annualRate / compoundFrequency);

    const totalDeposits = monthlyDeposit * timeInMonths;
    const interestEarned = maturityAmount - totalDeposits;

    setResult({
      total: maturityAmount.toFixed(2),
      interest: interestEarned.toFixed(2),
    });
  };

  return (
    <div className="recurring-deposit-page">
      <div className="calculator-container">
        <header>
          <h1>Recurring Deposit Calculator</h1>
        </header>
        <form onSubmit={calculateRecurringDeposit}>
          <div className="input-container">
            <label>Monthly Deposit: ₹{deposit}</label>
            <input
              type="number"
              value={deposit}
              onChange={handleDepositChange}
              min="1000"
              max="1000000"
              step="1000"
            />
            <input
              type="range"
              value={deposit}
              onChange={handleDepositChange}
              min="1000"
              max="1000000"
              step="1000"
            />
          </div>
          <div className="input-container">
            <label>Rate of interest (p.a): {rate}%</label>
            <input
              type="number"
              value={rate}
              onChange={handleRateChange}
              min="0"
              max="20"
              step="0.1"
            />
            <input
              type="range"
              value={rate}
              onChange={handleRateChange}
              min="0"
              max="20"
              step="0.1"
            />
          </div>
          <div className="input-container">
            <label>Time period (Months): {months}</label>
            <input
              type="number"
              value={months}
              onChange={handleMonthsChange}
              min="1"
              max="360"
              step="1"
            />
            <input
              type="range"
              value={months}
              onChange={handleMonthsChange}
              min="1"
              max="360"
              step="1"
            />
          </div>
          <div className="input-container">
            <label>Compounding frequency</label>
            <select value={frequency} onChange={handleFrequencyChange}>
              <option value="1">Yearly</option>
              <option value="2">Half-Yearly</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit">Calculate</button>
          </div>
        </form>
        <div className="result-container">
          <p>Total Maturity Amount: ₹{result.total}</p>
          <p>Total Interest Earned: ₹{result.interest}</p>
        </div>
      </div>
    </div>
  );
}

export default RecurringDepositCalculator;
