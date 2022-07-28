import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/nav/Navbar'
import Header from './components/header/Header';
import Certificate from './components/certification/Certificate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar data-aos="fade-down" />
    <div className="container">
      <Header />
      <Certificate />
    </div>
  </React.StrictMode>
);
