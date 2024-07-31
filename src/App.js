import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CompoundInterestCalculator from './CompoundInterestCalculator';
import SimpleInterestCalculator from './SimpleInterestCalculator';
import EMICalculator from './EMICalculator';
import SIPCalculator from './SIPCalculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
          <Route path="/simple-interest" element={<SimpleInterestCalculator />} />
          <Route path="/emi" element={<EMICalculator />} />
          <Route path="/sip" element={<SIPCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>Calculators</h1>
      <div className="calculator-grid">
        <CalculatorCard
          title="Compound Interest Calculator"
          description="Calculate the compound interest on your investment."
          link="/compound-interest"
        />
        <CalculatorCard
          title="Simple Interest Calculator"
          description="Calculate the simple interest on your investment."
          link="/simple-interest"
        />
        <CalculatorCard
          title="EMI Calculator"
          description="Calculate your Equated Monthly Installment (EMI)."
          link="/emi"
        />
        <CalculatorCard
          title="SIP Calculator"
          description="Calculate how much you will make with your SIP"
          link="/sip"
        />
      </div>
    </div>
  );
}

function CalculatorCard({ title, description, link }) {
  return (
    <div className="calculator-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>Go to Calculator</Link>
    </div>
  );
}

export default App;
