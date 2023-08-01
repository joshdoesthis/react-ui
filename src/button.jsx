import React from 'react'

export const Button = ({
  children,
  name = 'button',
  forwardRef = null,
  active = false,
  disabled = false,
  style = '',
  press = () => {}
}) => {
  return (
    <button
      ref={forwardRef}
      aria-label={name}
      disabled={disabled}
      active={`${active}`}
      onClick={press}
      className={style}
    >
      {children}
    </button>
  )
}
