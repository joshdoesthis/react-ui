import React, { useState, useEffect } from 'react'
import { Box } from './box'
import { Button } from './button'
import { to_title_case } from '../lib/helpers'

const DefaultOptionComponent = ({
  select,
  selected = false,
  name,
  value,
  size,
  tw = ''
}) => {
  return (
    <Button
      click={() => select({ name, value })}
      size={size}
      selected={selected}
      tw={tw}
    >
      {to_title_case(name)}
    </Button>
  )
}

export const Cassette = ({
  change = () => {},
  options,
  defaultValue,
  OptionComponent = DefaultOptionComponent,
  size = 'sm',
  tw = ''
}) => {
  const [selected, set_selected] = useState(
    options.find(o => o.value === defaultValue)
  )

  useEffect(() => {
    set_selected(options.find(o => o.value === defaultValue))
  }, [defaultValue])

  const select = ({ name, value }) => {
    change({ ok: true, message: null, data: { value } })
    set_selected({ name, value })
  }

  const style = {
    base: `
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[ok=true]:border-red-500 dark:data-[ok=true]:border-red-500
      text-zinc-800 dark:text-zinc-100
      outline-none
      rounded
    `,
    options: `
      bg-zinc-100 dark:bg-zinc-800
      border-1 border-zinc-300 dark:border-zinc-600
      data-[ok=true]:border-red-500 dark:data-[ok=true]:border-red-500
      outline-none
      rounded
    `,
    option: `
      hover:bg-zinc-200 dark:hover:bg-zinc-700
      active:bg-zinc-300 dark:active:bg-zinc-600
      disabled:bg-zinc-400 dark:disabled:bg-zinc-500
      data-[selected=true]:bg-zinc-300 dark:data-[selected=true]:bg-zinc-600
      rounded-none
      border-0
    `
  }

  const Divider = () => (
    <Box
      tw={`
        w-px h-full bg-zinc-300 dark:bg-zinc-600
      `}
    />
  )

  return (
    <Box tw={style.options}>
      {options.map((option, i) => (
        <Box key={`option_${i}`}>
          <OptionComponent
            select={select}
            value={option.value}
            name={option.name}
            size={size}
            selected={selected ? selected.value === option.value : false}
            tw={style.option}
          />
          {i < options.length - 1 ? <Divider /> : null}
        </Box>
      ))}
    </Box>
  )
}
