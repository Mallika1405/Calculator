import React, { useState } from 'react';
import './SIPCalculator.css';

function SIPCalculator() {
  const [investment, setInvestment] = useState(10000);
  const [rate, setRate] = useState(12);
  const [time, setTime] = useState(10);
  const [result, setResult] = useState({ futureValue: 0 });

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const calculateSIP = (e) => {
    e.preventDefault();
    const monthlyInvestment = parseFloat(investment);
    const annualRate = parseFloat(rate);
    const monthlyRate = annualRate / (12 * 100); // Convert annual rate to monthly and percentage to decimal
    const timePeriod = parseInt(time) * 12; // Convert years to months

    if (monthlyRate === 0) {
      // Handle case where rate is 0, which results in no growth
      const futureValue = monthlyInvestment * timePeriod;
      setResult({ futureValue: futureValue.toFixed(2) });
    } else {
      const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, timePeriod) - 1) / monthlyRate) * (1 + monthlyRate);
      setResult({ futureValue: futureValue.toFixed(2) });
    }
  };

  return (
    <div className="SIP-page">
      <div className="calculator-container">
        <header>
          <h1>SIP Calculator</h1>
        </header>
        <form onSubmit={calculateSIP}>
          <div className="input-container">
            <label>Monthly Investment: ₹{investment}</label>
            <input
              type="number"
              value={investment}
              onChange={handleInvestmentChange}
              min="500"
              max="100000"
              step="500"
            />
            <input
              type="range"
              value={investment}
              onChange={handleInvestmentChange}
              min="500"
              max="100000"
              step="500"
            />
          </div>
          <div className="input-container">
            <label>Expected Annual Rate of Return: {rate}%</label>
            <input
              type="number"
              value={rate}
              onChange={handleRateChange}
              min="0"
              max="30"
              step="0.1"
            />
            <input
              type="range"
              value={rate}
              onChange={handleRateChange}
              min="0"
              max="30"
              step="0.1"
            />
          </div>
          <div className="input-container">
            <label>Investment Period (Years): {time}</label>
            <input
              type="number"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="40"
              step="1"
            />
            <input
              type="range"
              value={time}
              onChange={handleTimeChange}
              min="1"
              max="40"
              step="1"
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <div className="result-container">
          <p>Future Value: ₹{result.futureValue}</p>
        </div>
      </div>
    </div>
  );
}

export default SIPCalculator;
