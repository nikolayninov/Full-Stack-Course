import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce((sum, { exercises }) => sum + exercises, 0)

  return <p><strong>Total exercises: {total}</strong></p>
}
export default Total