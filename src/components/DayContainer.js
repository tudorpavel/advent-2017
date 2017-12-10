import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

class DayContainer extends Component {
  constructor(props) {
    super(props);

    this.handleNormal = props.dayHandler.normal;
    this.handleBonus = props.dayHandler.bonus;

    this.handleChange = this.handleChange.bind(this);

    if (props.inputText != null) {
      this.state = {
        inputText: props.inputText,
        outputTextNormal: this.handleNormal(props.inputText),
        outputTextBonus: this.handleBonus(props.inputText)
      }
    } else {
      this.state = {
        inputText: '',
        outputTextNormal: '',
        outputTextBonus: ''
      }
    }
  }

  handleChange(event) {
    const newInputText = event.target.value;

    this.setState({
      inputText: newInputText,
      outputTextNormal: this.handleNormal(newInputText),
      outputTextBonus: this.handleBonus(newInputText)
    });
  }

  render() {
    const { titleId } = this.props;
    const { inputText, outputTextNormal, outputTextBonus } = this.state;

    return (
      <Day
        titleId={ titleId }
        inputText={ inputText }
        outputTextNormal={ outputTextNormal }
        outputTextBonus={ outputTextBonus }
        onChange={ this.handleChange }
      />
    );
  }
};

DayContainer.propTypes = {
  titleId: PropTypes.string.isRequired,
  dayHandler: PropTypes.object.isRequired,
  inputText: PropTypes.string
};

export default DayContainer;
