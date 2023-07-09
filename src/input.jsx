import { useRef, useEffect, useState } from 'react'
import { Box } from './box'
import { Text } from './text'
import { toFirstUpper } from '../lib/helpers'

export const Input = ({
  id = '',
  label = '',
  name = '',
  type = 'text',
  defaultValue = '',
  ok = true,
  message = '',
  change = () => {},
  blur = () => {}
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
      setValue(e.target.innerText)
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
        onBlur={blur}
        onChange={set(type)}
      />
    </Box>
  )
}
