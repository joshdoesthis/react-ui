import React from 'react'
import { createElement } from 'react'
import { mergeStyles } from '../lib/util'

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
  li
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
    li
  }).find(([k, v]) => v)

  const tagStyles = {
    span: 'text-base',
    p: 'text-base block',
    h1: 'text-6xl font-bold block',
    h2: 'text-5xl font-bold block',
    h3: 'text-4xl font-bold block',
    h4: 'text-3xl font-bold block',
    h5: 'text-2xl font-bold block',
    h6: 'text-1xl font-bold block',
    ol: 'list-decimal pl-8',
    ul: 'list-disc pl-8',
    li: ''
  }
  const classes = mergeStyles(tagStyles[tag ? tag[0] : 'span'], style)

  return createElement(tag ? tag[0] : 'span', { className: classes }, children)
}
