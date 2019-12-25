import React from 'react'

const Country = ({ ct, sh }) => {
  if (sh) {
    return (
      <div key={ct.name}>
        <h2>{ct.name}</h2>
        <p>Capital: {ct.capital}</p>
        <p>Population: {ct.population}</p>
        <h3>Languages</h3>
        <ul>
          {ct.languages.map(language => {
            return (
              <li key={language.name}>{language.name}</li>
            )
          })}
        </ul>
        <img src={ct.flag} alt="Flag" width="150px" border="1px solid #000000" />
      </div>
    )
  }
  return (<></>)

}
export default Country