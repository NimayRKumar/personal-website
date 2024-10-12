import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './pages/Home.js'
import Misc from './pages/Misc.js'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route exact path='/misc' component={Misc}/>
        </div>
      </Router>
    )
  }
}

export default App