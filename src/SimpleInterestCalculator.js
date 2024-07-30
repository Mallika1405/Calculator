import React, { useState } from 'react';
import './SimpleInterestCalculator.css';

function SimpleInterestCalculator() {
  const[principal, setPrincipal]=useState(10000)
  const[rate,setRate]=useState(5)
  const[time,setTime]=useState(5)
  const [result, setResult] = useState({ interest: 0, total: 0 });

  const handlePrincipalChange =(e)=>{
    setPrincipal(e.target.value);
  };
   
  const handleRateChange=(e)=>{
    setRate(e.target.value);
  };

  const handleTimeChange=(e)=>{
    setTime(e.target.value);
  };

  const calculateSimpleInterest=(e)=>{
    e.preventDefault();
    const interest=(principal*rate*time)/100;
    const total=parseFloat(principal)+interest;
    setResult({interest:interest.toFixed(2),total:total.toFixed(2)});
  };

  
    return (
      
      <div className="simple-interest-page">
        <div className="calculator-container">
          <header>
            <h1>Simple Interest Calculator</h1>
          </header>
          <form onSubmit={calculateSimpleInterest}>
            <div className="input-container">
              <label>Principal amount: ₹{principal}</label>
              <input type="number" value={principal} onChange={handlePrincipalChange} min="1000" max="1000000" step="1000" />
              <input type="range" value={principal} onChange={handlePrincipalChange} min="1000" max="1000000" step="1000" />
            </div>
            <div className="input-container">
              <label>Rate of interest (p.a): {rate}%</label>
              <input type="number" value={rate} onChange={handleRateChange} min="0" max="20" step="0.1" />
              <input type="range" value={rate} onChange={handleRateChange} min="0" max="20" step="0.1" />
            </div>
            <div className="input-container">
              <label>Time period (Years): {time}</label>
              <input type="number" value={time} onChange={handleTimeChange} min="1" max="30" step="1" />
              <input type="range" value={time} onChange={handleTimeChange} min="1" max="30" step="1" />
            </div>
            <button type="submit">Calculate</button>
          </form>
          <div className="result-container">
            <p>Simple Interest: ₹{result.interest}</p>
            <p>Total Amount: ₹{result.total}</p>
          </div>
        </div>
      </div>
    );
  }
  

export default SimpleInterestCalculator;
