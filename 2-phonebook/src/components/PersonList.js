import React from 'react';
import Person from './Person';

const PersonList = ({ list }) => {
  return (
    <ul>
      {list.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
};

export default PersonList;
