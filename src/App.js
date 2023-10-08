import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChangePassword from './components/reset'
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChangePassword />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
