import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import DepositEnrollmentForm from './components/DepositEnrollmentForm';
import InterestCalculator from './components/InterestCalculator';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/deposit-enrollment-from"
            element={<DepositEnrollmentForm />}
          />
          <Route path="/interest-calculator" element={<InterestCalculator />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
