import React, { createElement } from 'react'
import { twMerge } from 'tailwind-merge'

export const Text = ({ children, tw = '', size = 'md', variant = 'span' }) => {
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
    span: `inline text-base`,
    label: `block text-base font-bold`,
    size: {
      'xs': `text-xs`,
      'sm': `text-sm`,
      'md': `text-base`,
      'lg': `text-lg`,
      'xl': `text-xl`,
      '2xl': `text-2xl`,
      '3xl': `text-3xl`,
      '4xl': `text-4xl`,
      '5xl': `text-5xl`,
      '6xl': `text-6xl`,
      '7xl': `text-7xl`,
      '8xl': `text-8xl`,
      '9xl': `text-9xl`
    }
  }

  return createElement(
    variant,
    { className: twMerge(`${style[variant]} ${style.size[size]} ${tw}`) },
    children
  )
}
