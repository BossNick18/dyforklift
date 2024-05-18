import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Driver from './Driver';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/driver/:id" element={<Driver />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
