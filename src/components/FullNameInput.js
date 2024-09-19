import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const FullNameInput = ({ initialFullName, onFullNameChange }) => {
  const [fullName, setFullName] = useState(initialFullName);

  const debouncedChange = useCallback(
    debounce((value) => onFullNameChange(value), 300),
    [onFullNameChange]
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    setFullName(newValue);
    debouncedChange(newValue);
  };

  return (
    <div className="form-group">
      <label htmlFor="fullName">Full name</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={handleChange}
        placeholder="Full name"
      />
    </div>
  );
};

export default FullNameInput;