import React, { useState, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Box } from './box'
import { Button } from './button'

const DefaultOptionComponent = ({ change, name, value, tw = '' }) => {
  return (
    <Button click={() => change({ name, value })} size='sm'>
      {name}
    </Button>
  )
}

export const Select = ({
  change = () => {},
  options,
  label = '',
  OptionComponent = DefaultOptionComponent,
  tw = ''
}) => {
  const [open, set_open] = useState(false)
  const toggle = () => set_open(open => !open)

  const ref = useRef(null)

  useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        set_open(false)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const style = {
    options: `
      flex-col
      bg-zinc-100 dark:bg-zinc-800
      ${open ? 'opacity-100' : 'opacity-0'}
      ${open ? 'h-auto' : 'max-h-0'}
    `
  }

  return (
    <Box forwardRef={ref} tw='relative'>
      <Box tw='flex-col absolute'>
        <Button click={toggle} size='sm'>
          {label} <span tw='text-xs'>&#9660;</span>
        </Button>
        <Box tw={style.options}>
          {options.map((option, i) => (
            <OptionComponent
              key={`option_${i}`}
              change={change}
              value={option.value}
              name={option.name}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
