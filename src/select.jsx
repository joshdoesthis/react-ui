import React, { useState, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Box } from './box'
import { Button } from './button'
import { Text } from './text'
import { to_title_case, to_first_upper } from '../lib/helpers'

const DefaultOptionComponent = ({
  select,
  selected = false,
  name,
  value,
  tw = ''
}) => {
  return (
    <Button
      click={() => select({ name, value })}
      size='sm'
      selected={selected}
      tw={tw}
    >
      {to_title_case(name)}
    </Button>
  )
}

export const Select = ({
  change = () => {},
  options,
  defaultValue,
  label = '',
  OptionComponent = DefaultOptionComponent,
  tw = ''
}) => {
  const [open, set_open] = useState(false)
  const [selected, set_selected] = useState(
    options.find(o => o.value === defaultValue)
  )
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

  useEffect(() => {
    change({ ok: true, message: null, data: { value: selected.value } })
  }, [selected])

  useEffect(() => {
    set_selected(options.find(o => o.value === defaultValue))
  }, [defaultValue])

  const select = ({ name, value }) => {
    set_selected({ name, value })
    set_open(false)
  }

  const style = {
    base: `
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[ok=true]:border-red-500 dark:data-[ok=true]:border-red-500
      text-zinc-800 dark:text-zinc-100
      outline-none
      rounded
      w-full
    `,
    options: `
      flex-col
      absolute z-10 top-full left-0 right-0
      bg-zinc-100 dark:bg-zinc-800
      ${open ? 'opacity-100' : 'opacity-0'}
      ${open ? 'visible' : 'hidden'}
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[ok=true]:border-red-500 dark:data-[ok=true]:border-red-500
      outline-none
      rounded
      text-zinc-800 dark:text-zinc-100
      overflow-hidden
      mt-0.5
    `,
    option: `
      hover:bg-zinc-200 dark:hover:bg-zinc-700
      active:bg-zinc-300 dark:active:bg-zinc-600
      disabled:bg-zinc-400 dark:disabled:bg-zinc-500
      data-[selected=true]:bg-zinc-300 dark:data-[selected=true]:bg-zinc-600
      rounded-none
    `
  }

  return (
    <Box tw='flex-col gap-1 w-64'>
      {label ? (
        <Text variant='label' size='sm'>
          {to_first_upper(label)}
        </Text>
      ) : null}
      <Box forwardRef={ref} tw='relative'>
        <Button click={toggle} size='sm' tw={twMerge(style.base)}>
          <Text size='sm'>{selected && to_title_case(selected.name)}</Text>
          <Text size='sm'>&#9662;</Text>
        </Button>
        <Box tw={style.options}>
          {options.map((option, i) => (
            <OptionComponent
              key={`option_${i}`}
              select={select}
              value={option.value}
              name={option.name}
              selected={selected ? selected.value === option.value : false}
              tw={style.option}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
