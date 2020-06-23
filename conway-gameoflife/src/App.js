import React from 'react';
import Cellular from './Cellular'
import {Route} from 'react-router-dom'
import{BrowserRouter as Router} from 'react-router-dom';
import About from './About'
import Header from './Header'
import './App.css';


function App() {
  return (
    
    <div className="App">
      <Router>

        <Route path = "/">
          <Header />
        </Route>

        <Route path = "/about">
          <About />
        </Route> 

        <Route path ="/game">
          <Cellular /> 
        </Route>

      </Router>   
    </div>
  );
}

export default App;
