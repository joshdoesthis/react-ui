import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Box = ({ children, forwardRef = null, tw = '' }) => {
  const style = {
    base: `
      flex
    `
  }

  return (
    <div
      ref={forwardRef}
      className={twMerge(`
        ${style.base}
        ${tw}
      `)}
    >
      {children}
    </div>
  )
}
