import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

class DayContainer extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputText: '',
      outputText: ''
    }
  }

  handleChange(event) {
    const newInputText = event.target.value;

    this.setState({
      inputText: newInputText,
      outputText: newInputText
    });
  }

  render() {
    const { titleId } = this.props;
    const { inputText, outputText } = this.state;

    return (
      <Day
        titleId={ titleId }
        inputText={ inputText }
        outputText={ outputText }
        onChange={ this.handleChange }
      />
    );
  }
};

DayContainer.propTypes = {
  titleId: PropTypes.string.isRequired
};

export default DayContainer;
