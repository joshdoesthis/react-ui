import React from 'react'
import { mergeStyles } from '../lib/util'

export const Button = ({
  children,
  forwardRef = null,
  type = 'default',
  size = 'default',
  active = false,
  disabled = false,
  style = '',
  press = () => {}
}) => {
  const sizes = {
    default: 'py-1 px-2 text-sm',
    xs: 'py-0.5 px-1 text-xs',
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl'
  }

  const types = {
    default: 'bg-gray-500 hover:bg-gray-600 text-white',
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    text: 'bg-transparent hover:bg-transparent'
  }

  const defaultStyle = `
    ${types[type]}
    ${sizes[size]}
    rounded
    transition duration-200 ease-in-out
    cursor-pointer
  `

  const classes = mergeStyles(defaultStyle, style)

  return (
    <button
      ref={forwardRef}
      disabled={disabled}
      data-active={active}
      onClick={press}
      className={classes}
    >
      {children}
    </button>
  )
}
