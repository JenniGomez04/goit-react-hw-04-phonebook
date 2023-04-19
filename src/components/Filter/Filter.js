import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  const [updatedFilter, setUpdatedFilter] = useState(filter);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setUpdatedFilter(value);
    onChange(value);
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={updatedFilter}
        onChange={handleInputChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter

