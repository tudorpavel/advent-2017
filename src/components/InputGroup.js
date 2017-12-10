import React from 'react';
import PropTypes from 'prop-types';

import './InputGroup.css';

const InputGroup = ({ labelText, inputName, inputValue, onChange }) => {
  return (
    <div className="InputGroup">
      <label
        htmlFor={ inputName }
        className="InputGroup__label"
      >
        { labelText }
      </label>
      <textarea
        cols="30"
        id={ inputName }
        name={ inputName }
        rows="10"
        className="InputGroup__input"
        value={ inputValue }
        onChange={ onChange }
        readOnly={ onChange == null }
      />
    </div>
  );
};

InputGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default InputGroup;
