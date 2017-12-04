import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ labelText, inputName }) => {
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
      />
    </div>
  );
};

InputGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired
};

export default InputGroup;
