import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import About from './components/About/About'
import Experience from './components/Exp/Experience'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path='/about' component={About}/>
          <Route path='/exp' component={Experience}/>
        </div>
      </Router>
    )
  }
}

export default App;