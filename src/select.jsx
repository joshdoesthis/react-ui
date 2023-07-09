import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Box } from './box'
import { Button } from './button'
import { Text } from './text'
import { toTitleCase, toFirstUpper } from '../lib/helpers'

const DefaultOptionComponent = ({ name, value, active = false, select }) => {
  return (
    <Button press={() => select({ name, value })} active={active}>
      {toTitleCase(name)}
    </Button>
  )
}

export const Select = ({
  label = '',
  defaultValue,
  options,
  OptionComponent = DefaultOptionComponent,
  change = () => {}
}) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(
    options.find(o => o.value === defaultValue)
  )
  const ref = useRef(null)
  const toggle = () => setVisible(!visible)

  useEffect(() => {
    const click = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false)
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
    setVisible(false)
  }

  return (
    <>
      {label ? <Text>{toFirstUpper(label)}</Text> : null}
      <Box forwardRef={ref}>
        <Button press={toggle}>
          <Text>{selected && toTitleCase(selected.name)}</Text>
        </Button>
        <Box>
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
    </>
  )
}
