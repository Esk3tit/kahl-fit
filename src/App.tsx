import React from 'react';
import './App.css';
import About from './components/About';
import Policies from './components/Policies';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';
import NavbarHeader from './components/Navbar';

function App() {
  return (
    <div>
      <NavbarHeader />
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
