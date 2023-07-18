import React from 'react'
import { useRef, useEffect, useState } from 'react'

export const Input = ({
  id = '',
  type = 'default',
  name = '',
  defaultValue = '',
  ok = true,
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

  if (type === 'multiline') {
    return (
      <div
        ref={ref}
        id={id}
        contentEditable
        suppressContentEditableWarning
        ok={`${ok}`}
        className={style}
        onBlur={blur}
        onInput={set(type)}
      />
    )
  }

  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      ok={`${ok}`}
      className={style}
      onBlur={blur}
      onChange={set(type)}
    />
  )
}
