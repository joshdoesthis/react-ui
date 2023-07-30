import React, { createElement } from 'react'

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
  a,
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
  pre,
  code,
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  ...props
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
    a,
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
    pre,
    code,
    table,
    thead,
    tbody,
    tfoot,
    tr,
    th,
    td
  }).find(([_, v]) => v)

  const classes = [props.className, style].join(' ').trim()
  const href = props.href

  return createElement(
    tag?.[0] ?? 'span',
    {
      ...(classes ? { className: classes } : null),
      ...(href ? { href } : null)
    },
    children
  )
}
