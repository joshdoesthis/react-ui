import React, { useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = ({
  blur = () => {},
  change = () => {},
  ok = '',
  id = '',
  name = '',
  size = 'base',
  tw = '',
  variant = 'text',
  value = ''
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = value
    }
  }, [ref])

  useEffect(() => {
    if (ref.current) {
      if (ref.current.innerText !== value) {
        ref.current.innerText = value
      }
    }
  }, [value])

  const style = {
    base: `
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[ok=true]:border-red-500 dark:data-[ok=true]:border-red-500
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

  // TODO: Add support for data-message

  if (variant === 'multiline') {
    return (
      <div
        className={twMerge(`${style.base} ${style.size[size]} ${tw}`)}
        contentEditable
        data-ok={ok}
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
      data-ok={ok}
      id={id}
      name={name}
      onBlur={blur}
      onChange={change}
      type={variant}
      value={value}
    />
  )
}
