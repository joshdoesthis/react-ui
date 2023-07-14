import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Box } from './box'
import { Text } from './text'
import { toFirstUpper, mergeStyles } from '../lib/util'

export const Input = ({
  defaultValue = '',
  id = '',
  label = '',
  message = '',
  name = '',
  ok = true,
  size = 'default',
  type = 'default',
  style = '',
  blur = () => {},
  change = () => {}
}) => {
  const [value, setValue] = useState(defaultValue)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = defaultValue
    }
  }, [ref])

  useEffect(() => {
    if (ref.current) {
      if (ref.current.innerText !== defaultValue) {
        ref.current.innerText = defaultValue
      }
    }
  }, [defaultValue])

  useEffect(() => {
    if (type === 'multiline') {
      change({ ok: true, message: '', data: { value } })
    } else {
      change({ ...validate(type, value), data: { value } })
    }
  }, [value])

  const set = type => e => {
    if (type === 'multiline') {
      setValue(e.target.innerText.replace(/\u00a0/g, ' '))
    } else {
      setValue(e.target.value)
    }
  }

  const validate = (type, value) => {
    if (type === 'text') {
      return value.length > 0
        ? { ok: true, message: '' }
        : { ok: false, message: 'Required' }
    }
    if (type === 'email') {
      return value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ? { ok: true, message: '' }
        : { ok: false, message: 'Invalid email address' }
    }
  }

  const sizes = {
    default: 'py-1 px-2 text-sm',
    xs: 'py-0.5 px-1 text-xs',
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl'
  }

  const types = {
    default: 'bg-gray-100',
    multiline: 'whitespace-pre-wrap',
    email: 'bg-gray-100',
    text: 'bg-gray-100'
  }

  const defaultStyle = `
    ${types[type]}
    ${sizes[size]}
  `

  const classes = mergeStyles(defaultStyle, style)

  if (type === 'multiline') {
    return (
      <Box>
        {label ? <Text>{toFirstUpper(label)}</Text> : null}
        {message ? <Text>{message}</Text> : null}
        <div
          ref={ref}
          id={id}
          contentEditable
          suppressContentEditableWarning
          data-ok={ok}
          className={classes}
          onBlur={blur}
          onInput={set(type)}
        />
      </Box>
    )
  }

  return (
    <Box>
      {label ? <Text>{toFirstUpper(label)}</Text> : null}
      {message ? <Text>{message}</Text> : null}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        data-ok={ok}
        className={classes}
        onBlur={blur}
        onChange={set(type)}
      />
    </Box>
  )
}
