import React from 'react'

export const Button = ({
  children,
  forwardRef = null,
  active = false,
  disabled = false,
  style = '',
  press = () => {}
}) => {
  return (
    <button
      ref={forwardRef}
      disabled={disabled}
      active={`${active}`}
      onClick={press}
      className={style}
    >
      {children}
    </button>
  )
}
