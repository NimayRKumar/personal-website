import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import About from './components/About/About'
import Experience from './components/Exp/Experience'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={About}/>
          <Route path='/exp' component={Experience}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/education' component={Education}/>
          <Route path='/skills' component={Skills}/>
        </div>
      </Router>
    )
  }
}

export default App;