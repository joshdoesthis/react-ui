import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Box } from './box'
import { Button } from './button'
import { mergeStyles } from '../lib/util'

const DefaultTopComponent = ({ close }) => {
  return (
    <Box>
      <Button press={close}>Close</Button>
    </Box>
  )
}

export const Drawer = ({
  children,
  visible = false,
  close,
  style = '',
  TopComponent = DefaultTopComponent
}) => {
  const [visibility, setVisibility] = useState(visible)
  const ref = useRef(null)

  useEffect(() => {
    setVisibility(visible)
  }, [visible])

  useEffect(() => {
    const click = e => {
      if (visibility && ref.current && !ref.current.contains(e.target)) {
        close()
      }
    }
    document.addEventListener('click', click)
    return () => document.removeEventListener('click', click)
  }, [visibility])

  const defaultStyle = [
    'col',
    'data-[visible=true]:visible',
    'data-[visible=false]:hidden',
    'fixed top-0 right-0 bottom-0 z-50',
    'bg-white dark:bg-black',
    'text-black dark:text-white'
  ].join(' ')
  const classes = mergeStyles(defaultStyle, style)

  return (
    <Box forwardRef={ref} visible={visible} style={classes}>
      <TopComponent close={close} />
      {children}
    </Box>
  )
}
