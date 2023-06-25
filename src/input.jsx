import React, { useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = ({
  blur = () => {},
  change = () => {},
  error = '',
  id = '',
  size = 'base',
  tw = '',
  varient = 'text',
  value = ''
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
      ref.current.innerText = value
    }
  }, [ref])

  const style = {
    base: `
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[error=true]:border-red-500 dark:data-[error=true]:border-red-500
      outline-none
      rounded
      text-zinc-800 dark:text-zinc-100
      w-full
    `,
    size: {
      sm: `
        px-2 py-1
        text-sm
      `,
      base: `
        px-4 py-2
        text-base
      `,
      lg: `
        px-6 py-3
        text-lg
      `
    }
  }

  if (varient === 'multiline') {
    return (
      <div
        className={twMerge(`${style.base} ${style.size[size]} ${tw}`)}
        contentEditable
        data-error={error}
        id={id}
        onBlur={blur}
        onInput={change}
        ref={ref}
        suppressContentEditableWarning
      />
    )
  }

  return (
    <input
      className={twMerge(`${style.base} ${style.size[size]} ${tw}`)}
      data-error={error}
      id={id}
      onBlur={blur}
      onChange={change}
      type={varient}
      value={value}
    />
  )
}
