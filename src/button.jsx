import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = ({
  children,
  varient = 'default',
  size = 'base',
  click = () => {},
  disabled = false,
  tw = ''
}) => {
  const style = {
    base: `
      flex flex-row gap-2 items-center justify-center
      rounded
      cursor-pointer
      select-none
    `,
    size: {
      sm: `
        text-sm
        px-2 py-1
        h-8
      `,
      base: `
        text-base
        px-4 py-2
        h-10
      `,
      lg: `
        text-lg
        px-6 py-3
        h-12
      `
    },
    varient: {
      primary: `
        bg-indigo-500 dark:bg-indigo-400
        text-zinc-100 dark:text-zinc-100
        font-bold
        hover:bg-indigo-600 dark:hover:bg-indigo-500
        active:bg-indigo-700 dark:active:bg-indigo-600
        disabled:bg-zinc-400 dark:disabled:bg-zinc-500
      `,
      secondary: `
        bg-zinc-100 dark:bg-zinc-800
        text-zinc-800 dark:text-zinc-100
        font-bold
        hover:bg-zinc-200 dark:hover:bg-zinc-700
        active:bg-zinc-300 dark:active:bg-zinc-600
        disabled:bg-zinc-400 dark:disabled:bg-zinc-500
      `,
      danger: `
        bg-red-500 dark:bg-red-400
        text-red-100 dark:text-red-100
        font-bold
        hover:bg-red-600 dark:hover:bg-red-500
        active:bg-red-700 dark:active:bg-red-600
        disabled:bg-red-400 dark:disabled:bg-red-500
      `,
      default: `
        bg-transparent
        text-zinc-800 dark:text-zinc-100
        font-bold
      `
    },
    disabled: `
      opacity-50
      cursor-not-allowed
    `
  }

  return (
    <button
      className={twMerge(`
        ${style.base}
        ${style.size[size]}
        ${style.varient[varient]}
        ${disabled ? style.disabled : ''}
        ${tw}
      `)}
      onClick={click}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
