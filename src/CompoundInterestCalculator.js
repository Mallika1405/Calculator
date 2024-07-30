// src/CompoundInterestCalculator.js
import React, { useState } from 'react';
import './CompoundInterestCalculator.css';

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6);
  const [time, setTime] = useState(5);
  const [frequency, setFrequency] = useState(12);
  const [result, setResult] = useState({ total: 0, interest: 0 });

  const handlePrincipalChange = (e) => {
    setPrincipal(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    const principalAmount = parseFloat(principal);
    const annualRate = parseFloat(rate) / 100;
    const timePeriod = parseFloat(time);
    const compoundFrequency = parseInt(frequency);

    const totalAmount = principalAmount * Math.pow((1 + annualRate / compoundFrequency), compoundFrequency * timePeriod);
    const interestAmount = totalAmount - principalAmount;

    setResult({
      total: totalAmount.toFixed(2),
      interest: interestAmount.toFixed(2),
    });
  };

  return (
    <div className="compound-interest-page">
      <div className="calculator-container">
        <header>
          <h1>Compound Interest Calculator</h1>
        </header>
        <form onSubmit={calculateCompoundInterest}>
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
            <label>Time period (Periods): {time}</label>
            <input
              type="number"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="30"
              step="1"
            />
            <input
              type="range"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="30"
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
          <button type="submit">Calculate</button>
        </form>
        <div className="result-container">
          <p>Total Amount: ₹{result.total}</p>
          <p>Total Interest: ₹{result.interest}</p>
        </div>
      </div>
    </div>
  );
}

export default CompoundInterestCalculator;
