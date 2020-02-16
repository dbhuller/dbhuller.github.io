import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//importing components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
  
}

export default App;
