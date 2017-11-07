import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import Header from './components/Header/index.js';
import MainContent from './components/MainContent/index.js';
import Footer from './components/Footer/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
