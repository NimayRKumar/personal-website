import React, { Component } from 'react';

import './App.css';
import About from './components/About/About'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;