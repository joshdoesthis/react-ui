import React, { createElement } from 'react'
import { twMerge } from 'tailwind-merge'

export const Text = ({ children, tw = '', variant = 'span' }) => {
  const style = {
    h1: `block my-4 text-4xl font-bold`,
    h2: `block my-4 text-3xl font-bold`,
    h3: `block my-4 text-2xl font-bold`,
    h4: `block my-4 text-xl font-bold`,
    h5: `block my-4 text-lg font-bold`,
    h6: `block my-4 text-base font-bold`,
    ol: `block my-4 list-decimal list-inside`,
    ul: `block my-4 list-disc list-inside`,
    p: `block my-4 text-base`,
    span: `inline text-base`
  }

  return createElement(
    variant,
    { className: twMerge(`${style[variant]} ${tw}`) },
    children
  )
}
