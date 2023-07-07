import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = ({
  click = () => {},
  children,
  forwardRef = null,
  variant = 'default',
  size = 'md',
  disabled = false,
  selected = false,
  tw = ''
}) => {
  const style = {
    base: `
      border-1 border-transparent
      flex flex-row gap-2 items-center justify-between self-center
      rounded
      cursor-pointer
      select-none      
    `,
    size: {
      xs: `
        text-xs
        px-1 py-0.5
      `,
      sm: `
        text-sm
        px-2 py-1
      `,
      md: `
        text-base
        px-4 py-2
      `,
      lg: `
        text-lg
        px-6 py-3 
      `
    },
    variant: {
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
      ref={forwardRef}
      className={twMerge(`
        ${style.base}
        ${style.size[size]}
        ${style.variant[variant]}
        ${disabled ? style.disabled : ''}
        ${tw}
      `)}
      onClick={click}
      disabled={disabled}
      data-selected={selected}
    >
      {children}
    </button>
  )
}
