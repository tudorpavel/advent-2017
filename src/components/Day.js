import React from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

const Day = ({ titleId }) => {
  return (
    <div className="Day">
      <h2 className="Day__title">
        { titleId }
      </h2>
      <div className="Day__form">
        <InputGroup
          labelText="Input"
          inputName={ `${titleId}-input` }
        />
        <InputGroup
          labelText="Output"
          inputName={ `${titleId}-output` }
        />
      </div>
    </div>
  );
};

Day.propTypes = {
  titleId: PropTypes.string.isRequired
};

export default Day;
