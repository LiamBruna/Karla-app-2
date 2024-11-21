import React from 'react';
import './index.css';
import Header from './components/Header';
import NightBackground from './components/NightBackground';
import Flower from './components/Flower';

function App() {
  return (
    <div className="container">
      <Header />
      <NightBackground />
      <div className="flowers">
        <Flower type="flower--1" />
        <Flower type="flower--2" />
        <Flower type="flower--3" />
      </div>
    </div>
  );
}

export default App;
