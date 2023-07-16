import React from 'react'
import { createElement } from 'react'

export const Text = ({
  children,
  style = '',
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  li,
  code,
  ...props
}) => {
  const tag = Object.entries({
    span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol,
    ul,
    li,
    code,
    ...props
  }).find(([k, v]) => v)

  return createElement(tag ? tag[0] : 'span', {}, children)
}
