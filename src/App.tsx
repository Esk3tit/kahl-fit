import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './About';
import Policies from './Policies';
import Services from './Services';
import Location from './Location';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <About />
      <Policies />
      <Services />
      <Location />
    </div>
  );
}

export default App;
