import React, { useState } from 'react';
import './RecurringDepositCalculator.css';

function RecurringDepositCalculator() {
  const [deposit, setDeposit] = useState(10000);
  const [rate, setRate] = useState(6);
  const [months, setMonths] = useState(60);
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

  const calculateRecurringDeposit = (e) => {
    e.preventDefault();
    const monthlyDeposit = parseFloat(deposit);
    const annualRate = parseFloat(rate) / 100; // Convert percentage to decimal
    const timeInMonths = parseFloat(months);
    const compoundingFrequency = 4; // Quarterly compounding as per the formula
    const timeInYears = timeInMonths / 12; // Convert months to years

    // Calculate RD maturity amount using the correct formula
    let maturityAmount = 0;
    for (let i = 0; i < timeInMonths; i++) {
      const term = (timeInMonths - i) / 12; // Tenure for each deposit in years
      maturityAmount += monthlyDeposit * Math.pow((1 + annualRate / compoundingFrequency), compoundingFrequency * term);
    }

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
              min="100"
              max="100000"
              step="100"
            />
            <input
              type="range"
              value={deposit}
              onChange={handleDepositChange}
              min="100"
              max="100000"
              step="100"
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
              max="120"
              step="1"
            />
            <input
              type="range"
              value={months}
              onChange={handleMonthsChange}
              min="1"
              max="120"
              step="1"
            />
          </div>
          <div className="input-container">
            <label>Compounding frequency: Quarterly</label>
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
