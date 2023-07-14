import React from 'react'
import { mergeStyles } from '../lib/util'

export const Box = ({
  children,
  forwardRef = null,
  style = '',
  visible = true
}) => {
  const defaultStyle = [
    'data-[visible=true]:visible',
    'data-[visible=false]:hidden'
  ].join(' ')
  const classes = mergeStyles(defaultStyle, style)

  return (
    <div ref={forwardRef} data-visible={visible} className={classes}>
      {children}
    </div>
  )
}
