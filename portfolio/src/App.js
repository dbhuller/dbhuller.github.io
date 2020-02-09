import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//importing components
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
