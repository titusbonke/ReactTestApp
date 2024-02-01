// Example Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './App';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

const Routesa= () => {
  return (
    <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
    </Routes>
  );
};

export default Routesa;
