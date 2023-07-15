import React from 'react'

export const Label = ({ children, name, style = '' }) => {
  return (
    <label htmlFor={name} className={style}>
      {children}
    </label>
  )
}
