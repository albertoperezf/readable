import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import Header from './components/Header/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
