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
import * as day9 from './utils/day9';
import * as day10 from './utils/day10';
import * as day11 from './utils/day11';
import * as day12 from './utils/day12';
import * as day13 from './utils/day13';

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
            titleId="Day13"
            dayHandler={ day13 }
          />
          <DayContainer
            titleId="Day12"
            dayHandler={ day12 }
          />
          <DayContainer
            titleId="Day11"
            dayHandler={ day11 }
          />
          <DayContainer
            titleId="Day10"
            dayHandler={ day10 }
          />
          <DayContainer
            titleId="Day9"
            dayHandler={ day9 }
          />
          <DayContainer
            titleId="Day8"
            dayHandler={ day8 }
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
