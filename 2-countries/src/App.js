import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from './components/Display';
import Input from './components/Input';

function App() {
  const [newFilter, setNewFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div className='App'>
      <Input
        value={newFilter}
        change={handleFilterChange}
        text='find countries '
      />
    </div>
  );
}

export default App;
