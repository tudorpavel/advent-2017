import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import DayContainer from './components/DayContainer';
import * as day1 from './utils/day1';
import * as day2 from './utils/day2';
import * as day3 from './utils/day3';
import * as day4 from './utils/day4';
import * as day5 from './utils/day5';
import * as day6 from './utils/day6';
import * as day7 from './utils/day7';
import * as day8 from './utils/day8';

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
            titleId="Day8"
            dayHandler={ day8 }
            inputText="b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10"
          />
          <DayContainer
            titleId="Day7"
            dayHandler={ day7 }
          />
          <DayContainer
            titleId="Day6"
            dayHandler={ day6 }
          />
          <DayContainer
            titleId="Day5"
            dayHandler={ day5 }
          />
          <DayContainer
            titleId="Day4"
            dayHandler={ day4 }
          />
          <DayContainer
            titleId="Day3"
            dayHandler={ day3 }
          />
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
