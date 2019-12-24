import React from 'react'

const Filter = ({ s, f }) => {
  return (
    <div>filter shown with: <input value={s} onChange={f} /></div>
  )
}
export default Filter