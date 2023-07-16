import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from './box'
import { Button } from './button'
import { Divider } from './divider'
import { toTitleCase } from '../lib/util'

const DefaultOptionComponent = ({ name, value, active = false, select }) => {
  return (
    <Button active={active} press={() => select({ name, value })}>
      {toTitleCase(name)}
    </Button>
  )
}

export const Cassette = ({
  defaultValue,
  options,
  change = () => {},
  OptionComponent = DefaultOptionComponent
}) => {
  const [selected, setSelected] = useState(
    options.find(o => o.value === defaultValue)
  )

  useEffect(() => {
    setSelected(options.find(o => o.value === defaultValue))
  }, [defaultValue])

  const select = ({ name, value }) => {
    change({ ok: true, message: '', data: { value } })
    setSelected({ name, value })
  }

  return (
    <Box style='row'>
      {options.map((o, i) => (
        <Box key={`o${i}`} style='row'>
          <OptionComponent
            name={o.name}
            value={o.value}
            active={selected ? selected.value === o.value : false}
            select={select}
          />
          {i < options.length - 1 ? <Divider /> : null}
        </Box>
      ))}
    </Box>
  )
}
