import React from 'react';
import Cellular from './Cellular'
import About from './About'
import './App.css';


function App() {
  return (
    <div className="App">
     <h1>Conway-Game of life</h1>
     <Cellular />
     <About />
    </div>
  );
}

export default App;
