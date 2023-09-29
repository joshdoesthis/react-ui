import React, { useState, useEffect, useRef } from 'react'
import { Box } from './box'
import { Button } from './button'
import { Text } from './text'

const DefaultOptionComponent = ({ name, value, active = false, select }) => {
  return (
    <Button press={() => select({ name, value })} active={active}>
      {name}
    </Button>
  )
}

export const Menu = ({ children, change = () => {} }) => {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  const toggle = () => setActive(!active)

  useEffect(() => {
    const click = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(false)
      }
    }
    document.addEventListener('click', click)
    return () => document.removeEventListener('click', click)
  }, [])

  return (
    <Box forwardRef={ref} style='relative col stretch-center rounded w-full'>
      <Button
        active={active}
        style='row center-between gap-1 bg-(zinc-500 dark:zinc-700) hover:bg-(zinc-700 dark:zinc-500) text-white px-2 py-1 [active=false]:rounded rounded-t'
        press={toggle}
      >
        <Text style='text-xs text-left font-bold line-clamp-1'>Menu</Text>
        <Text style='text-xs'>{active ? '△' : '▽'}</Text>
      </Button>
      <Box
        active={active}
        style='absolute top-full col gap-px bg-(white dark:black) mt-px w-full [active=false]:hidden rounded-b overflow-hidden'
      >
        {children}
      </Box>
    </Box>
  )
}
