import React, { useState } from 'react';
import './EMICalculator.css';

function EMICalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(6);
  const [result, setResult] = useState({ EMI: 0 });

  const handlePrincipalChange = (e) => {
    setPrincipal(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const calculateEMI = (e) => {
    e.preventDefault();
    const principalAmount = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const monthlyRate = annualRate / (12 * 100); // Convert annual rate to monthly and percentage to decimal
    const timePeriod = parseInt(time); // Ensure time is an integer

    if (monthlyRate === 0) {
      const EMI = principalAmount / timePeriod;
      setResult({ EMI: EMI.toFixed(2) });
    } else {
      const EMI = (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, timePeriod)) / (Math.pow(1 + monthlyRate, timePeriod) - 1);
      setResult({ EMI: EMI.toFixed(2) });
    }
  };

  return (
    <div className="EMI-page">
      <div className="calculator-container">
        <header>
          <h1>Equated Monthly Installment Calculator</h1>
        </header>
        <form onSubmit={calculateEMI}>
          <div className="input-container">
            <label>Principal amount: ₹{principal}</label>
            <input
              type="number"
              value={principal}
              onChange={handlePrincipalChange}
              min="1000"
              max="1000000"
              step="1000"
            />
            <input
              type="range"
              value={principal}
              onChange={handlePrincipalChange}
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
            <label>Time period (Months): {time}</label>
            <input
              type="number"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="360"
              step="1"
            />
            <input
              type="range"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="360"
              step="1"
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <div className="result-container">
          <p>EMI: ₹{result.EMI}</p>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
