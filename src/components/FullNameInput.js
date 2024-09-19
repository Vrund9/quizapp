import React from 'react';

const FullNameInput = ({ fullName, onFullNameChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="fullName">Full name</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => onFullNameChange(e.target.value)}
        placeholder="Full name"
      />
    </div>
  );
};

export default FullNameInput;