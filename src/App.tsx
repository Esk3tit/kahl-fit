import React from 'react';
// import logo from './logo.svg
import './App.css';
import About from './components/About';
import Policies from './components/Policies';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <About />
      <Policies />
      <Services />
      <Location />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
