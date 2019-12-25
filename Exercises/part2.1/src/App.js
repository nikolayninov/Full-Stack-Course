import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const addNewContact = (event) => {
    event.preventDefault();
    if (persons.find(p => p.name === newName))
      alert(`${newName} is already added to phonebook`)
    else {
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObj))
      setNewName('');
      setNewNumber('')
    }
  }
  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <Header text="Phonebook" />
      <Filter s={newFilter} f={handleFilterChange} />
      <Header text="Add a new" />
      <PersonForm name={{ s: newName, f: handleNameChange }} number={{ s: newNumber, f: handleNumberChange }} f={addNewContact} />
      <Header text="Numbers" />
      <Contacts contacts={personsToShow} />
    </div>
  )
}

export default App