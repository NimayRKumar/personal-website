import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Misc from './pages/Misc'

class App extends Component {

  render() {
    return (
      <ThemeProvider>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route exact path='/misc' component={Misc}/>
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App