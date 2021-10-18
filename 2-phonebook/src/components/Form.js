import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({ submit, name, nameChange, number, numberChange }) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <Input value={name} change={nameChange} />
      </div>
      <div>
        number: <Input value={number} change={numberChange} />
      </div>
      <div>
        <Button type='submit' text='add' />
      </div>
    </form>
  );
};

export default Form;
