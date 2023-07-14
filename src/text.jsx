import React from 'react'
import { createElement } from 'react'
import { mergeStyles } from '../lib/util'

export const Text = ({
  children,
  style = '',
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  ol,
  p,
  span,
  ul
}) => {
  const tag = Object.entries({
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    ol,
    p,
    span,
    ul
  }).find(([k, v]) => v)

  const tagStyles = {
    h1: 'text-6xl font-bold block',
    h2: 'text-5xl font-bold block',
    h3: 'text-4xl font-bold block',
    h4: 'text-3xl font-bold block',
    h5: 'text-2xl font-bold block',
    h6: 'text-1xl font-bold block',
    li: '',
    ol: 'list-decimal pl-8',
    p: 'text-base block',
    span: 'text-base',
    ul: 'list-disc pl-8'
  }
  const classes = mergeStyles(tagStyles[tag ? tag[0] : 'span'], style)

  return createElement(tag ? tag[0] : 'span', { className: classes }, children)
}
