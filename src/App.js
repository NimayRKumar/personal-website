import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import About from './components/About/About'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;