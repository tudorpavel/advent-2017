import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import DayContainer from './components/DayContainer';
import * as day1 from './utils/day1';
import * as day2 from './utils/day2';

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
            titleId="Day2"
            dayHandler={ day2 }
          />
          <DayContainer
            titleId="Day1"
            dayHandler={ day1 }
          />
        </div>
      </div>
    );
  }
}

export default App;
