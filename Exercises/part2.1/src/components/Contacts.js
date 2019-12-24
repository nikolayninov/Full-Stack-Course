import React from 'react'
import Contact from './Contact'

const Contacts = ({ contacts }) => {
  const displayContacts = () => {
    return contacts.map(p => <Contact key={p.name} name={p.name} number={p.number} />)
  }
  return (
    <div>
      {displayContacts()}
    </div>
  )
}
export default Contacts