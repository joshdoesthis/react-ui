import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Box } from './box'
import { Button } from './button'
import { vi } from 'date-fns/locale'

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
  style = '',
  close,
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

  return visible ? (
    <Box forwardRef={ref} style={style}>
      <TopComponent close={close} />
      {children}
    </Box>
  ) : null
}
