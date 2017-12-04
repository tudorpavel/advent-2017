import React from 'react';
import PropTypes from 'prop-types';

import './Day.css';

import InputGroup from './InputGroup';

const Day = ({ titleId, inputText, outputText, onChange }) => {
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
          labelText="Output"
          inputName={ `${titleId}-output` }
          inputValue={ outputText }
        />
      </div>
    </div>
  );
};

Day.propTypes = {
  titleId: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  outputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Day;
