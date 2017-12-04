import React from 'react';
import PropTypes from 'prop-types';

import './Day.css';

import InputGroup from './InputGroup';

const Day = ({ titleId, inputText, outputTextNormal, outputTextBonus,onChange }) => {
  return (
    <div className="Day">
      <h2 className="Day__title">
        { titleId }
      </h2>
      <div className="Day__form">
        <InputGroup
          labelText="Input"
          inputName={ `${titleId}-input` }
          inputValue={ inputText }
          onChange={ onChange }
        />
        <InputGroup
          labelText="Output-Normal"
          inputName={ `${titleId}-output-normal` }
          inputValue={ outputTextNormal }
        />
        <InputGroup
          labelText="Output-Bonus"
          inputName={ `${titleId}-output-bonus` }
          inputValue={ outputTextBonus }
        />
      </div>
    </div>
  );
};

Day.propTypes = {
  titleId: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  outputTextNormal: PropTypes.string.isRequired,
  outputTextBonus: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Day;
