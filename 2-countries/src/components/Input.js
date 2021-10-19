import React from 'react';

const Input = ({ value, change, text }) => {
  return (
    <div>
      {text}
      <input value={value} onChange={change} />
    </div>
  );
};

export default Input;
