import React, { useState } from 'react';

const FullNameInput = ({ onFullNameChange }) => {
  const [fullName, setFullName] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setFullName(newValue);
    onFullNameChange(newValue);
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