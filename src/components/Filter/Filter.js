import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;




/*import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={handleInputChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;*/


