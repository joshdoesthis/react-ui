import { createElement } from 'react'

export const Text = ({ children }) => {
  return createElement(
    'span',
    {
      className: ''
    },
    children
  )
}
