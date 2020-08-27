import React from 'react';
import Cellular from './components/Cellular'
import {Route} from 'react-router-dom'
import{BrowserRouter as Router} from 'react-router-dom';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import './App.css';


function App() {
  return (
    
    <div className="App">
      <Router>

        <Route path = "/">
          <Header />
        </Route>

        <Route path = "/home">
          <Home />
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
