import React from 'react';

const InputGroup = ({ labelText, inputName }) => {
  return (
    <div className="InputGroup">
      <label
        for={ inputName }
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

export default InputGroup;
