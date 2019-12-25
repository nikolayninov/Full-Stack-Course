import React from 'react'
import Country from './Country'
import CountryList from './CountryList'
const Display = (props) => {

  console.log("DISPLAY", props);
  const countries = props.countries
  if (countries.length > 10) {
    return (
      <h4>Too many matches, specify another filter</h4>
    )
  }
  else if (countries.length === 1) {
    return (
      <Country ct={countries[0]} />
    )
  }
  return (
    <div>
      {countries.map(country => {
        return (
          <CountryList key={country.name} country={country} />
        )
      })}
    </div>
  )
}
export default Display