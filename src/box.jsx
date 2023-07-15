import React from 'react'

export const Box = ({
  children,
  forwardRef = null,
  style = '',
  visible = true
}) => {
  return (
    <div ref={forwardRef} data-visible={visible} className={style}>
      {children}
    </div>
  )
}
