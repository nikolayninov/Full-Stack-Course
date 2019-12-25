import React, { useState } from 'react'
const CountryList = ({ country }) => {
  const [buttonShow, setButtonShow] = useState(false)
  const handleClick = () => {
    setButtonShow(!buttonShow)
  }
  const showInfo = () => {
    if (buttonShow) {
      return (
        <div key={country.name}>
          <strong>{country.name}</strong> <button onClick={handleClick}>hide</button> <br></br>
          <div >
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
              {country.languages.map(language => {
                return (
                  <li key={language.name}>{language.name}</li>
                )
              })}
            </ul>
            <img src={country.flag} alt="Flag" width="150px" border="1px solid #000000" />
          </div>
        </div>
      )
    }
    return (<div><span>{country.name}</span> <button onClick={handleClick}>show</button> <br></br></div>)
  }
  return (
    <div key={country.name}>
      {showInfo()}
    </div>
  )
}

export default CountryList