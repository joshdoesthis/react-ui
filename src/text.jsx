import React from 'react'
import { createElement } from 'react'

export const Text = ({
  children,
  style = '',
  b,
  strong,
  i,
  em,
  mark,
  small,
  del,
  ins,
  sub,
  sup,
  span = true,
  q,
  blockquote,
  abbr,
  address,
  cite,
  bdo,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  br,
  pre
}) => {
  const tag = Object.entries({
    b,
    strong,
    i,
    em,
    mark,
    small,
    del,
    ins,
    sub,
    sup,
    span,
    q,
    blockquote,
    abbr,
    address,
    cite,
    bdo,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    br,
    pre
  }).find(([k, v]) => v)

  if (tag && tag[0] === 'href') {
    return createElement(
      'a',
      { href: tag[1], className: 'underline' },
      children
    )
  }

  return createElement(
    tag ? tag[0] : 'span',
    { ...(style ? { className: style } : null) },
    children
  )
}
