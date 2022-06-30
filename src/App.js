import React, { Component } from 'react';

import './App.css';
import About from './components/About/About'
import Music from './components/Music/Music'
import Outdoors from './components/Outdoors/Outdoors'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          {
          //<Navbar/>
          }
          <Route exact path='/' component={About}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/outdoors' component={Outdoors}/>
        </div>
      </Router>
    )
  }
}

export default App;