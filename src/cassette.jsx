import React, { useState, useEffect, Fragment } from 'react'
import { Box } from './box'
import { Button } from './button'
import { mergeStyles } from '../lib/utils'

const DefaultOptionComponent = ({ name, value, active = false, select }) => {
  return (
    <Button active={active} press={() => select({ name, value })}>
      {name}
    </Button>
  )
}

export const Cassette = ({
  defaultValue,
  options,
  style = '',
  OptionComponent = DefaultOptionComponent,
  change = () => {}
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

  const defaultStyle =
    'row gap-px bg-(white dark:black) overflow-hidden rounded'

  return (
    <Box style={mergeStyles(defaultStyle, style)}>
      {options.map((o, i) => (
        <Fragment key={`o${i}`}>
          <OptionComponent
            name={o.name}
            value={o.value}
            active={selected ? selected.value === o.value : false}
            select={select}
          />
        </Fragment>
      ))}
    </Box>
  )
}
