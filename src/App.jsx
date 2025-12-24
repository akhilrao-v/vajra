import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// Placeholder components for other routes
const Placeholder = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>Page under construction</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/assets" element={<Placeholder title="Assets" />} />
      <Route path="/incidents" element={<Placeholder title="Incidents" />} />
      <Route path="/services" element={<Placeholder title="Services" />} />
      <Route path="/request" element={<Placeholder title="Requests" />} />
      <Route path="/users" element={<Placeholder title="Users" />} />
      <Route path="/reports" element={<Placeholder title="Reports" />} />
    </Routes>
  );
}

export default App;