import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Day from './components/Day';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Advent of Code 2017</h1>
        </header>
        <div className="App__content">
          <Day titleId="Day1" />
          <Day titleId="Day2" />
        </div>
      </div>
    );
  }
}

export default App;
