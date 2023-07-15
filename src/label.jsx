import React from 'react'

export const Label = ({ children, for: htmlFor, style = '' }) => {
  return (
    <label htmlFor={htmlFor} className={style}>
      {children}
    </label>
  )
}
