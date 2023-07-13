import React from 'react'

export const Button = ({
  children,
  forwardRef = null,
  active = false,
  disabled = false,
  size = 'md',
  varient = 'primary',
  press = () => {}
}) => {
  const sizes = {
    xs: 'py-0.5 px-1 text-xs',
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl'
  }

  const varients = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-blue-500 hover:bg-blue-600 text-white',
    light: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    link: 'bg-transparent hover:bg-transparent text-blue-500',
    text: 'bg-transparent hover:bg-transparent text-blue-500'
  }

  const classes = `
    ${sizes[size]}
    ${varients[varient]}
    rounded
    transition duration-200 ease-in-out
  `

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
