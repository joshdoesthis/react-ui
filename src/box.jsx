import React from 'react'

export const Box = ({
  children,
  forwardRef = null,
  active = false,
  style = ''
}) => {
  return (
    <div ref={forwardRef} active={`${active}`} className={style}>
      {children}
    </div>
  )
}
