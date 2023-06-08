import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = ({
  children,
  id = '',
  type = 'text',
  change = () => {},
  blur = () => {},
  value = '',
  error = '',
  size = 'base',
  tw = ''
}) => {
  const style = {
    base: `
      bg-zinc-100 dark:bg-zinc-800
      text-zinc-800 dark:text-zinc-100
      border-1 border-zinc-300 dark:border-zinc-600
      data-[error=true]:border-red-500 dark:data-[error=true]:border-red-500
      rounded
      outline-none
      w-full
    `,
    size: {
      sm: `
        text-sm
        px-2 py-1
      `,
      base: `
        text-base
        px-4 py-2
      `,
      lg: `
        text-lg
        px-6 py-3
      `
    }
  }

  return (
    <input
      id={id}
      type={type}
      className={twMerge(`
        ${style.base}
        ${style.size[size]}
        ${tw}
      `)}
      onChange={change}
      onBlur={blur}
      value={value}
      data-error={error}
    />
  )
}
