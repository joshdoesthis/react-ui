import React from 'react'
import { Button } from './button'
import { twMerge } from 'tailwind-merge'

const DefaultOptionsComponent = ({ select, options, value }) => {
  const style = {
    base: `
      flex
    `
  }

  console.log(value)

  return options.map(o => (
    <Button key={o.value} click={() => select(o)}>
      {o.name}
    </Button>
  ))
}

export const Select = ({
  select = () => {},
  options,
  value,
  OptionsComponent = DefaultOptionsComponent,
  children,
  tw = ''
}) => {
  const style = {
    base: `
      flex
    `
  }

  return (
    <div
    // className={twMerge(`
    //   ${style.base}
    //   ${tw}
    // `)}
    >
      <OptionsComponent select={select} options={options} value={value} />
    </div>
  )
}
