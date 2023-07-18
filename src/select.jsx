import React from 'react'
import { useState, useEffect, useRef } from 'react'
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

export const Select = ({
  defaultValue,
  options,
  OptionComponent = DefaultOptionComponent,
  IconComponent = () => <></>,
  change = () => {}
}) => {
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(
    options.find(o => o.value === defaultValue)
  )
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

  useEffect(() => {
    setSelected(options.find(o => o.value === defaultValue))
  }, [defaultValue])

  const select = ({ name, value }) => {
    change({ ok: true, message: '', data: { value } })
    setSelected({ name, value })
    setActive(false)
  }

  return (
    <Box forwardRef={ref} style='relative col stretch-center rounded w-full'>
      <Button
        active={active}
        style='row center-between gap-1 bg-(zinc-500 dark:zinc-700) hover:bg-(zinc-700 dark:zinc-500) text-white px-2 py-1 [active=false]:rounded rounded-t'
        press={toggle}
      >
        <Text style='text-xs font-bold line-clamp-1'>
          {selected && selected.name}
        </Text>
        <IconComponent active={active} />
      </Button>
      <Box
        active={active}
        style='absolute top-full col gap-px bg-(white dark:black) mt-px w-full [active=false]:hidden rounded-b overflow-hidden'
      >
        {options.map((o, i) => (
          <OptionComponent
            key={`o${i}`}
            name={o.name}
            value={o.value}
            active={selected ? selected.value === o.value : false}
            select={select}
          />
        ))}
      </Box>
    </Box>
  )
}
