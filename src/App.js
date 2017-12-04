import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import DayContainer from './components/DayContainer';
import { day1Normal, day1Bonus } from './utils/day1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Advent of Code 2017</h1>
        </header>
        <div className="App__content">
          <DayContainer
            titleId="Day1-Normal"
            dayHandler={ day1Normal }
          />
          <DayContainer
            titleId="Day1-Bonus"
            dayHandler={ day1Bonus }
          />
        </div>
      </div>
    );
  }
}

export default App;
