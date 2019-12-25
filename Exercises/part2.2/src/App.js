import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Display from './components/Display'
function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  const handleChangeSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase()));
  console.log("APP", countriesToShow);
  return (
    <div className="App">
      <p>find countries <input onChange={handleChangeSearchCountry} /></p>
      <Display countries={countriesToShow} />
    </div>
  );
}

export default App;
