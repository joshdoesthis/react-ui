import React from 'react'

export const Box = ({ children, forwardRef = null, visible = true }) => {
  return (
    <div ref={forwardRef} data-visible={visible}>
      {children}
    </div>
  )
}
