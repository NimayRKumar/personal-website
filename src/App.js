import React, { Component } from 'react';
import { Tabs, Tab, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import About from './components/About'

class App extends Component {

  render() {
    return (

      <Navbar bg="dark" variant="dark">
          <Container>
              <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#music">Music</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
 
    )
  }
}

export default App;