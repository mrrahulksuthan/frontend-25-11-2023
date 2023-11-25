import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest-today" element={<Home />} />
        <Route path="/contest/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
