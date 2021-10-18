import React, { useState } from 'react';
import PersonList from './components/PersonList';
import Header from './components/Header';
import Input from './components/Input';
import Form from './components/Form';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const names = persons.map((person) => person.name);

    if (names.includes(personObject.name)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      event.target.reset();
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    const regex = new RegExp(event.target.value, 'i');
    if (event.target.value) {
      setFiltered(persons.filter((person) => person.name.match(regex)));
    } else {
      setFiltered(persons);
    }
  };

  return (
    <div>
      <Header text='Phonebook' />
      <div>
        filter shown with{' '}
        <Input value={newFilter} change={handleFilterChange} />
      </div>
      <Header text='Add New' />
      <Form
        submit={addPerson}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />
      <Header text='Numbers' />
      {newFilter ? (
        <PersonList list={filtered} />
      ) : (
        <PersonList list={persons} />
      )}
    </div>
  );
};

export default App;
