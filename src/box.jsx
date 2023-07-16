import React from 'react'

export const Box = ({ children, forwardRef = null, style = '' }) => {
  return (
    <div ref={forwardRef} className={style}>
      {children}
    </div>
  )
}
