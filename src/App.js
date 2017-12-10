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
            titleId="Day7"
            dayHandler={ day7 }
            inputText="pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)"
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
