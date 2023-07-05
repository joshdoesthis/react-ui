import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { getDaysInMonth } from 'date-fns'
import { Input } from './input.jsx'
import { Box } from './box.jsx'

export const Time = ({
  change = () => {},
  blur = () => {},
  tw = {
    box: '',
    input: ''
  }
}) => {
  const [state, set_state] = useState({
    day: { ok: true, data: new Date().getDate() },
    month: { ok: true, data: new Date().getMonth() },
    year: { ok: true, data: new Date().getFullYear() }
  })

  useEffect(() => {
    const ok = state.day.ok && state.month.ok && state.year.ok
    const message =
      state.day.message || state.month.message || state.year.message
        ? 'Invalid date'
        : null
    const date = new Date(
      state.year.data,
      state.month.data - 1,
      state.day.data
    ).toISOString()
    change({ ok, message, date: ok ? date : null })
  }, [state])

  const set = e => {
    const { name, value } = e.target
    set_state(state => ({
      ...state,
      [name]: {
        ...state[name],
        data: value
      }
    }))
  }

  const validate = () => {
    for (const [name, { data }] of Object.entries(state)) {
      const max_d = getDaysInMonth(
        new Date(state.year.data, state.month.data - 1)
      )
      const min_y = new Date().getFullYear()
      const max_y = min_y + 100
      const [ok, message] = {
        day: data < 1 || data > max_d ? [false, 'Invalid day'] : null,
        month: data < 1 || data > 12 ? [false, 'Invalid month'] : null,
        year: data < min_y || data > max_y ? [false, 'Invalid year'] : null
      }[name] ?? [true, null]
      state[name] = { data, ok, message }
    }
    set_state({ ...state })
  }

  return (
    <Box tw={twMerge('gap-1', tw.box)}>
      {Object.entries(state).map(([name, { ok, message, data }]) => (
        <Input
          key={name}
          name={name}
          change={set}
          blur={validate}
          value={data}
          ok={!ok}
          message={message}
          variant='number'
          size='sm'
          tw={twMerge('w-24', tw.input)}
        />
      ))}
    </Box>
  )
}
