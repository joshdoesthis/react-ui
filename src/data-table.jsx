import React from 'react'
import { twMerge } from 'tailwind-merge'

export const DataTable = ({ children, tw = '' }) => {
  const style = {
    base: `
      flex
    `
  }

  return (
    <div
      className={twMerge(`
        ${style.base}
        ${tw}
      `)}
    >
      {children}
    </div>
  )
}
