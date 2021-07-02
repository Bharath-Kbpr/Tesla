import React from 'react';

import CyberHome from './components/CyberTruck/CyberHome'
import './App.css';

import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
       <Route path="/" exact component={Home} /> 
       <Route path="/CyberHome" component={CyberHome} /> 
       </Router>
      
    </div>
  );
}

export default App;
