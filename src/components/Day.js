import React from 'react';

import InputGroup from './InputGroup';

const Day = () => {
  return (
    <div className="Day">
      <h2 className="Day__title">
        Day
      </h2>
      <div className="Day__form">
        <InputGroup
          labelText="Input"
          inputName="input"
        />
        <InputGroup
          labelText="Output"
          inputName="output"
        />
      </div>
    </div>
  );
};

export default Day;
