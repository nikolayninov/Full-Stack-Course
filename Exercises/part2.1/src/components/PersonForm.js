import React from 'react'

const PersonForm = ({ name, number, f }) => {
  return (
    <form>
      <div>name: <input value={name.s} onChange={name.f} /></div>
      <div>number: <input value={number.s} onChange={number.f} /></div>
      <div>
        <button type="submit" onClick={f}>add</button>
      </div>
    </form>
  )
}
export default PersonForm