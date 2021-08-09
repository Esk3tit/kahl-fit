import React from 'react';
// import logo from './logo.svg
import './App.css';
import About from './components/About';
import Policies from './components/Policies';
import Services from './components/Services';
import Location from './components/Location';

function App() {
  return (
    <div>
      <About />
      <Policies />
      <Services />
      <Location />
    </div>
  );
}

export default App;
